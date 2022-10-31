import axios from 'axios'
import _ from 'lodash'

export const getPrice = async (symbol, price, datePriceChecked) => {
	const currentDateTime = new Date().toISOString()
	const isPriceOutOfDate =
		new Date(datePriceChecked) < new Date(currentDateTime)

	if (!isPriceOutOfDate || symbol === 'usd') return price

	// const cachedPrice = await storeInCache(symbol)
	// if (cachedPrice) return cachedPrice

	return fetchFromApi(symbol)
}

const fetchFromApi = async (symbol) => {
	const response = await axios.get(
		`https://api.polygon.io/v2/aggs/ticker/C:${symbol.toUpperCase()}USD/prev`,
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_POLYGON_APi_KEY}`,
			},
		}
	)
	const responsePrice = 1 / response.data.results[0].c
	return _.round(responsePrice, 2)
}

// const storeInCache = async (symbol) => {
// idk, get from local storage?
//     return null
// }
