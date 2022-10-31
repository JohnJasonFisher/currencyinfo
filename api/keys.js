export default function handler(request, response) {
	response.status(200).json({
		api_keys: [
			`${process.env.POLYGON_API_KEY}`,
			`${process.env.VITE_POLYGON_API_KEY}`,
		],
	})
}
