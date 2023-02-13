import axios from 'axios'
import _ from 'lodash'
import Redis from 'ioredis'

const REDIS_CONNECTION_STRING =
	process.env.REDIS_CONNECTION_STRING || 'no connection string'
const redis = new Redis(REDIS_CONNECTION_STRING)
const PRICES_HASH_KEY = 'prices'

export default async function handler(request, response) {
	const symbol: string = request.query.symbol
	try {
		let price: string | null = await getPriceFromRedis(symbol)
		if (!price) {
			price = await getPriceFromPolygonApi(symbol)
			await setPriceInRedis(symbol, price)
		}
		return response.status(200).json({ price })
	} catch (error) {
		return response.status(500).json({ error: 'Internal server error' })
	}
}

async function getPriceFromRedis(symbol) {
	try {
		return redis.hget(PRICES_HASH_KEY, symbol)
	} catch (error) {
		console.log('error from getPriceFromRedis', error.message)
		throw error
	}
}

async function setPriceInRedis(symbol, price) {
	try {
		return redis.hset(PRICES_HASH_KEY, symbol, price)
	} catch (error) {
		console.log('error from setPriceInRedis', error.message)
		throw error
	}
}

async function getPriceFromPolygonApi(symbol: string): Promise<string> {
	const url = `https://api.polygon.io/v2/aggs/ticker/C:${symbol.toUpperCase()}USD/prev`
	console.info('GET price from polygon api', { url })
	try {
		const polygonResponse = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${process.env.POLYGON_API_KEY}`,
			},
		})
		console.info('Result from polygon api', { data: polygonResponse.data })
		const price: number = polygonResponse.data.results[0].c
		return _.round(price, 2).toString()
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
