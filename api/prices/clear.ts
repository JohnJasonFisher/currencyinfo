import Redis from 'ioredis'

const REDIS_CONNECTION_STRING =
	process.env.REDIS_CONNECTION_STRING || 'no connection string'
const redis = new Redis(REDIS_CONNECTION_STRING)

export default async function handler(request, response) {
	await redis.flushall()
	console.log('Redis cleared')
	return response.status(200).json({ message: 'Redis cleared' })
}
