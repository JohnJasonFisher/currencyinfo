import axios from 'axios'
import _ from 'lodash'

export default async function handler(request, response) {
	const { symbol } = request.query
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
		const roundedPrice = _.round(pricePerOneUsd, 2)
		return response.status(200).json({ price: roundedPrice })
	} catch (error) {
		const { status, statusText, data } = error.response
		console.error('Error from GET /api/prices', {
			status,
			statusText,
			data,
		})
		return response.status(500).json({ error: 'Internal server error' })
	}
}
