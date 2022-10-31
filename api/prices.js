import axios from 'axios'
import _ from 'lodash'

export default async function handler(request, response) {
	const { symbol } = request.query
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
}
