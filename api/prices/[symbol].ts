import axios from 'axios'
import _ from 'lodash'
import Redis from 'ioredis'

const REDIS_CONNECTION_STRING =
	process.env.REDIS_CONNECTION_STRING || 'no connection string'
const redis = new Redis(REDIS_CONNECTION_STRING)

export default async function handler(request, response) {
	const symbol: string = request.query.symbol
	try {
		let price: string | null = await getPriceFromRedis(symbol)
		if (!price) {
			price = await await getPriceFromPolygonApi(symbol)
			await setPriceInRedis(symbol, price)
		}
		return response.status(200).json({ price })
	} catch (error) {
		return response.status(500).json({ error: 'Internal server error' })
	}
}

async function getPriceFromRedis(symbol) {
	try {
		return redis.get(`${symbol}Price`)
	} catch (error) {
		console.log('error from getPriceFromRedis', error.message)
		throw error
	}
}

async function setPriceInRedis(symbol, price) {
	try {
		return redis.set(`${symbol}Price`, price)
	} catch (error) {
		console.log('error from setPriceInRedis', error.message)
		throw error
	}
}

async function getPriceFromPolygonApi(symbol: string): Promise<string> {
	try {
		const polygonResponse = await axios.get(
			`https://api.polygon.io/v2/aggs/ticker/C:${symbol.toUpperCase()}USD/prev`,
			{
				headers: {
					Authorization: `Bearer ${process.env.POLYGON_API_KEY}`,
				},
			}
		)
		const rawPrice = polygonResponse.data.results[0].c
		const pricePerOneUsd = 1 / rawPrice
		return _.round(pricePerOneUsd, 2).toString()
	} catch (error) {
		const { status, statusText, data } = error.response
		console.error('error from getPriceFromPolygonApi', {
			status,
			statusText,
			data,
		})
		throw error
	}
}
