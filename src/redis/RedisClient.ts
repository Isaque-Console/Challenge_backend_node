import Redis from 'ioredis';

const redisClient = new Redis({
    port: +process.env.REDIS_PORT, // Redis port. The '+' signal convert string to number
    host: process.env.REDIS_HOST, // Redis host
    username: process.env.REDIS_USERNAME, // needs Redis >= 6
});

export { redisClient };