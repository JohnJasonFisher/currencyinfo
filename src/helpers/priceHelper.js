import axios from 'axios'
import _ from 'lodash'

export const getPrice = async (symbol, price, datePriceChecked) => {
	const currentDateTime = new Date().toISOString()
	const isPriceOutOfDate =
		new Date(datePriceChecked) < new Date(currentDateTime)

	if (!isPriceOutOfDate) return price

	// const cachedPrice = await storeInCache(symbol)
	// if (cachedPrice) return cachedPrice

	return fetchFromApi(symbol)
}

const fetchFromApi = async (symbol) => {
	const response = await axios.get(
		`https://api.polygon.io/v2/aggs/ticker/C:${symbol.toUpperCase()}USD/prev?adjusted=true&apiKey=VQaScxsItHK0WH0f6QLJlNOa1YOcvyUj`
	)
	const responsePrice = response.data.results[0].c
	return _.round(responsePrice, 2)
}

// const storeInCache = async (symbol) => {
// idk, get from local storage?
//     return null
// }
