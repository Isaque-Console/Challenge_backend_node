FROM node:16.14.2-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma db push
RUN npx prisma generate
EXPOSE 3000
CMD [ "npm", "start" ]

# Tentando dockerizar o meu banco de dados postgres
