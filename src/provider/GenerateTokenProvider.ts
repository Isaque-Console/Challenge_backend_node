import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {
    async execute(userId: string) {
        const secretKey: string = process.env.JWT_SECRET_KEY ?? "fb645857-7a93-48dd-91c0-001fa9d8f026";
        const token = sign({}, secretKey, {
            subject: userId,
            expiresIn: "1 day"
        });

        return token;
    }
}

export { GenerateTokenProvider };