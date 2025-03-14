# Challenge NGCASH
## Resumo do projeto
Esse projeto é uma api que simula uma aplicação de Banco financeiro de forma simplificada, expondo endpoints que permitem criar uma conta, fazer transações financeiras, consultar saldo, buscar usuários, buscar transações, etc. Esse projeto foi feito atentando para utilizar alguns conceitos importantes no desenvolvimento do backend, como exemplo, autenticação, autorização, Clean arch, POO, um pouco de testes unitários, dockerização, além disso, utilizei o design pattern Strategy, para que seja possível escalar essa aplicação facilmente com algum novo banco de dados ou regra de negócios, sem que seja preciso reestruturar o código base, tornando, assim, o código bastante independente de frameworks e ferramentas utlizadas. Apliquei ainda um pouco do conceito do design pattern Factory Method, criando uma classe abstrata que serve de modelo para as entidades do projeto, as quais têm implementações diferentes dos atributos e métodos, permitindo assim a criação de novas entidades de acordo com o crescimento do projeto.

## Project summary
This project is an API that simulates a financial banking application in a simplified manner, exposing endpoints that allow users to create an account, perform financial transactions, check balances, search for users, retrieve transaction history, and more.

The project was built with a strong focus on key backend development concepts, including authentication, authorization, Clean Architecture, Object-Oriented Programming (OOP), basic unit testing, and containerization using Docker.

Additionally, I implemented the Strategy design pattern to ensure the application can be easily scaled with a new database or business logic without requiring major refactoring of the core code. This approach makes the codebase highly independent of specific frameworks and tools.

Furthermore, I applied the Factory Method design pattern by creating an abstract class that serves as a blueprint for the project's entities. Each entity has distinct implementations of attributes and methods, allowing for seamless expansion of the project as new requirements emerge.

### Tecnologias utilizadas:
- Docker
- Docker-compose
- Dockerize
- Redis
- Node.js
- Typescript
- Jest
- Prisma
- PostgreSQL
- MongoDB
- Express

### Concepts used:
- Containerization
- Cache
- Testes unitários
- In memory database
- Design pattern (Strategy and Factory Method)
- Authentication
- Authorization
- OOP
- Clean Arch
- Clean Code
- SOLID
- Encrypted password

### Design patterns

`Strategy` : <https://refactoring.guru/pt-br/design-patterns/strategy>

`Factory Method` : <https://refactoring.guru/pt-br/design-patterns/factory-method>

### Prerequisites
- Docker and Docker Compose must be installed on your machine.
  
### How to run the project
- Open the terminal inside the project folder.
- Type the following command in the terminal: `$ docker-compose up -d --build`

### Postman collection

    {
	"info": {
		"_postman_id": "55cefbcd-c137-407b-a980-f9ba0806915a",
		"name": "Challenge",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11884482"
	},
	"item": [
		{
			"name": "Get user",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMmEyYmU5YzE0NDI0YWViYjY1ODgiLCJpYXQiOjE2ODg2MTM2NTYsImV4cCI6MTY4ODcwMDA1Niwic3ViIjoiNjQxYjJhMmJlOWMxNDQyNGFlYmI2NTg4In0.CDs5XeWUDzytzJRij6uqWxy1lngTG7rp1F1_cC3woFY",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/user/641b2a2be9c14424aebb6588",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"user",
						"641b2a2be9c14424aebb6588"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get account",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMmEyYmU5YzE0NDI0YWViYjY1ODgiLCJpYXQiOjE2ODg2MTM2NTYsImV4cCI6MTY4ODcwMDA1Niwic3ViIjoiNjQxYjJhMmJlOWMxNDQyNGFlYmI2NTg4In0.CDs5XeWUDzytzJRij6uqWxy1lngTG7rp1F1_cC3woFY",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/account/641b2a2be9c14424aebb6588",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"account",
						"641b2a2be9c14424aebb6588"
					]
				}
			},
			"response": []
		},
		{
			"name": "User transactions",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMmEyYmU5YzE0NDI0YWViYjY1ODgiLCJpYXQiOjE2ODg2MTM2NTYsImV4cCI6MTY4ODcwMDA1Niwic3ViIjoiNjQxYjJhMmJlOWMxNDQyNGFlYmI2NTg4In0.CDs5XeWUDzytzJRij6uqWxy1lngTG7rp1F1_cC3woFY",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/transactions/641b2a2be9c14424aebb6588",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"transactions",
						"641b2a2be9c14424aebb6588"
					]
				}
			},
			"response": []
		},
		{
			"name": "Filtered transactions",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQwNjI4MDQsImV4cCI6MTY3NDE0OTIwNCwic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.FxdcI2X1P7mIiTEQTWCzeqtXGlTURcsyX0nx-fUkfbM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"tag\": \"CashOut\",\n    \"date\": \"2023-01-17\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/transactions/filter/87e7319e-7b06-4185-8a2a-d685b3227e77",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"transactions",
						"filter",
						"87e7319e-7b06-4185-8a2a-d685b3227e77"
					]
				}
			},
			"response": []
		},
		{
			"name": "CreateUser",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"userId\": \"641b2a2be9c14424aebb6588\",\n    \"username\": \"Usuário4\",\n    \"password\": \"Senha1234\",\n    \"accountId\": null\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Authenticate User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"Usuário4\",\n    \"password\": \"Senha1234\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Financial Transaction",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "authorization",
						"value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQxMzcxNDQsImV4cCI6MTY3NDIyMzU0NCwic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.X4onze0pRHWiyw2DOt3cqfwtz79sYCO8fhVkJWd5IH0",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"payeeUsername\": \"Usuário4\",\n    \"transferAmount\": 11.00\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/transaction/30772ed8-bc87-4e60-8024-424937f2e947",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"transaction",
						"30772ed8-bc87-4e60-8024-424937f2e947"
					]
				}
			},
			"response": []
		}
	]
}

### Flowchart (Example of flow)

```mermaid
flowchart LR

A[Create User] --> B(Login)
B --> C(Get Balance)
```

**Note:**
- Remember to include the authorization header with the token received in the login endpoint response when making a Get Balance request.
- The format is as follows: Bearer {token}.
- Ex: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmOTg3Nzk3ZS1kZDNkLTRiODYtOThjNy1jYjNiMzQ4NGQ1NjQiLCJpYXQiOjE2NzQ1MDExNjcsImV4cCI6MTY3NDU4NzU2Nywic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.Aaz621cN6ORThZpcynmfYgahezk69CccEoVAZK9XZiY
