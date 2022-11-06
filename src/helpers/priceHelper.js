import axios from 'axios'

export const getPrice = async (symbol) => {
	if (symbol === 'usd') return 1
	return fetchPrice(symbol)
}

const fetchPrice = async (symbol) => {
	const response = await axios.get(
		`${import.meta.env.VITE_APP_BASE_URL}/api/prices?symbol=${symbol}`
	)
	return response.data.price
}
