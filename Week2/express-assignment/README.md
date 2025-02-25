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

## Usage

- The application exposes RESTful APIs for user and product operations.
- You can use tools like Postman or curl to interact with the APIs.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.