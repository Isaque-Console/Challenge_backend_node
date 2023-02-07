# Challenge NGCASH
## Resumo do projeto
Esse projeto é uma api que simula uma aplicação de Banco financeiro de forma simplificada, expondo endpoints que permitem criar uma conta, fazer transações financeiras, consultar saldo, buscar usuários, buscar transações, etc. Esse projeto foi feito atentando para utilizar alguns conceitos importantes no desenvolvimento do backend, como exemplo, autenticação, autorização, Clean arch, POO, um pouco de testes unitários, dockerização, além disso, utilizei o design pattern Strategy, para que seja possível escalar essa aplicação facilmente com algum novo banco de dados ou regra de negócios, sem que seja preciso reestruturar o código base, tornando, assim, o código bastante independente de frameworks e ferramentas utlizadas. Apliquei ainda um pouco do conceito do design pattern Factory Method, criando uma classe abstrata que serve de modelo para as entidades do projeto, as quais têm implementações diferentes dos atributos e métodos, permitindo assim a criação de novas entidades de acordo com o crescimento do projeto.

### Tecnologias utilizadas:
- Docker
- Docker-compose
- Dockerize
- Node.js
- Typescript
- Jest
- Prisma
- PostgreSQL
- Express

### Conceitos utilizados:
- Containerização
- Testes unitários
- In memory database
- Design pattern (Strategy e um pouco de Factory Method)
- Autenticação
- Autorização
- POO
- Clean Arch
- Clean Code
- Senha criptografada

### Design patterns

`Strategy` : <https://refactoring.guru/pt-br/design-patterns/strategy>

`Factory Method` : <https://refactoring.guru/pt-br/design-patterns/factory-method>

### Pré-requisitos

- Ter instalado em sua máquina o docker e o docker-compose

### Como rodar o projeto
- Abra o terminal dentro da pasta do projeto.
- Digite o seguinte comando no terminal: `$ docker-compose up -d --build`

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
    			"name": "Get balance",
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
    						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmOTg3Nzk3ZS1kZDNkLTRiODYtOThjNy1jYjNiMzQ4NGQ1NjQiLCJpYXQiOjE2NzQ1MDExNjcsImV4cCI6MTY3NDU4NzU2Nywic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.Aaz621cN6ORThZpcynmfYgahezk69CccEoVAZK9XZiY",
    						"type": "text"
    					}
    				],
    				"url": {
    					"raw": "http://localhost:3000/account/f987797e-dd3d-4b86-98c7-cb3b3484d564",
    					"protocol": "http",
    					"host": [
    						"localhost"
    					],
    					"port": "3000",
    					"path": [
    						"account",
    						"f987797e-dd3d-4b86-98c7-cb3b3484d564"
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
    						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQwNTM5NDIsImV4cCI6MTY3NDE0MDM0Miwic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.LtCItJagiE-N-KBuZsDkrgGQyaOxzwz1fV8MNCSMMHs",
    						"type": "text"
    					}
    				],
    				"url": {
    					"raw": "http://localhost:3000/transactions/87e7319e-7b06-4185-8a2a-d685b3227e77",
    					"protocol": "http",
    					"host": [
    						"localhost"
    					],
    					"port": "3000",
    					"path": [
    						"transactions",
    						"87e7319e-7b06-4185-8a2a-d685b3227e77"
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
    					"raw": "{\n    \"userId\": null,\n    \"username\": \"Usuário8\",\n    \"password\": \"Senha1234\",\n    \"accountId\": null\n}",
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

###Diagrama de fluxo (Exemplo de fluxo)

```flow
create=>operation: Create User
st=>start: Login
get=>end: Get Balance

create->st->get

```
**OBS:** 
- Lembre-se de, quando fazer a requisição de Get Balance, colocar o header authorization com o token recebido na resposta do endpoint de login.
- O formato é o seguinte: Bearer {token}.
- Ex: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmOTg3Nzk3ZS1kZDNkLTRiODYtOThjNy1jYjNiMzQ4NGQ1NjQiLCJpYXQiOjE2NzQ1MDExNjcsImV4cCI6MTY3NDU4NzU2Nywic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.Aaz621cN6ORThZpcynmfYgahezk69CccEoVAZK9XZiY
