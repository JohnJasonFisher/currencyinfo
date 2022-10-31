import axios from 'axios'

export const getPrice = async (symbol, price, datePriceChecked) => {
	const currentDateTime = new Date().toISOString()
	const isPriceOutOfDate =
		new Date(datePriceChecked) < new Date(currentDateTime)

	if (!isPriceOutOfDate || symbol === 'usd') return price
	return fetchPrice(symbol)
}

const fetchPrice = async (symbol) => {
	const response = await axios.get(
		`${import.meta.env.VITE_APP_BASE_URL}/api/prices?symbol=${symbol}`
	)
	return response.data.price
}
