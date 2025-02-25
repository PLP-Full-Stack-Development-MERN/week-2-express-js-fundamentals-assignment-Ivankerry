# Express Assignment

This project is a simple Express application that demonstrates the use of routes, middleware, and controllers for handling user and product operations.

## Project Structure

```
express-assignment
├── routes
│   ├── userRoutes.js
│   ├── productRoutes.js
├── middleware
│   ├── logger.js
├── controllers
│   ├── userController.js
│   ├── productController.js
├── index.js
├── package.json
├── README.md
└── .env
```

## Features

- User Management: Create, retrieve, update, and delete users.
- Product Management: Create, retrieve, update, and delete products.
- Request Logging: Middleware to log incoming requests.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-assignment
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

5. Start the application:
   ```
   node index.js
   ```

   ## API Endpoints



### **User Routes**



| Method | Endpoint         | Description       |

| ------ | ---------------- | ----------------- |

| GET    | `/api/users`     | Get all users     |

| POST   | `/api/users`     | Create a new user |

| PUT    | `/api/users/:id` | Update user by ID |

| DELETE | `/api/users/:id` | Delete user by ID |



#### Example Requests:



```sh

curl -X GET http://localhost:5000/api/users

```



```sh

curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"name": "John Doe"}'

```



### **Product Routes**



| Method | Endpoint            | Description          |

| ------ | ------------------- | -------------------- |

| GET    | `/api/products`     | Get all products     |

| POST   | `/api/products`     | Create a new product |

| PUT    | `/api/products/:id` | Update product by ID |

| DELETE | `/api/products/:id` | Delete product by ID |



#### Example Requests:



```sh

curl -X GET http://localhost:5000/api/products

```



```sh

curl -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d '{"name": "Laptop"}'

```



## Middleware



- **Logger Middleware**: Logs request details (method, URL, timestamp)



## Error Handling



- Global error handler to catch unexpected errors and return a proper response.



## Testing



- Use **Postman** or **cURL** to test API endpoints.

- Check if the logger middleware is correctly logging requests.



## Usage

- The application exposes RESTful APIs for user and product operations.
- You can use tools like Postman or curl to interact with the APIs.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
