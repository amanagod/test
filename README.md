# 📚 Books API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4+-blue.svg)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)
[![GitHub issues](https://img.shields.io/github/issues/amanagod/test)](https://github.com/amanagod/test/issues)
[![GitHub stars](https://img.shields.io/github/stars/amanagod/test)](https://github.com/amanagod/test/stargazers)

## 🚀 Description

A RESTful API built with Node.js and Express for a Bookstore application. Features include complete CRUD operations for books, file-based data persistence using JSON files, and secure JWT-based user authentication. Only authenticated users can access book endpoints, and users can only modify books they've created.

## ✨ Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 📚 **Book Management** - Full CRUD operations for books
- 💾 **File-Based Storage** - Data persistence using JSON files
- 🛡️ **Authorization** - Users can only modify their own books
- 🔍 **Search & Filter** - Search books by genre
- 📄 **Pagination** - Paginated book listings
- 📝 **Request Logging** - Middleware for logging all requests
- 🚨 **Error Handling** - Comprehensive error handling

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt
- **File System**: fs.promises
- **ID Generation**: uuid
- **Data Storage**: JSON files

## 📁 Project Structure

```
books-api/
├── controllers/
│   ├── bookController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   └── logger.js
├── models/
│   ├── bookModel.js
│   └── userModel.js
├── routes/
│   ├── bookRoutes.js
│   └── userRoutes.js
├── data/
│   ├── books.json
│   └── users.json
├── app.js
├── package.json
└── README.md
```

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amanagod/test.git
   cd test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create data directory:**
   ```bash
   mkdir data
   ```

4. **Start the server:**
   ```bash
   node app.js
   ```

The server will start on `http://localhost:3000`

## 🔧 Required Dependencies

```bash
npm install express jsonwebtoken bcrypt uuid
```

## 🔐 Authentication Endpoints

### Register User
```http
POST /api/users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Login User
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 📚 Book Endpoints

> **Note:** All book endpoints require authentication. Include the JWT token in the Authorization header.

### Get All Books
```http
GET /api/books
Authorization: Bearer <your_jwt_token>
```

### Get Book by ID
```http
GET /api/books/:id
Authorization: Bearer <your_jwt_token>
```

### Create New Book
```http
POST /api/books
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic Literature",
  "publishedYear": 1925
}
```

### Update Book
```http
PUT /api/books/:id
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "title": "Updated Title",
  "author": "Updated Author",
  "genre": "Updated Genre",
  "publishedYear": 2023
}
```

### Delete Book
```http
DELETE /api/books/:id
Authorization: Bearer <your_jwt_token>
```

## 🔍 Search & Filter

### Search Books by Genre
```http
GET /api/books/search?genre=fiction
Authorization: Bearer <your_jwt_token>
```

### Pagination
```http
GET /api/books?page=1&limit=10
Authorization: Bearer <your_jwt_token>
```

## 📄 Book Data Schema

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "publishedYear": 2023,
  "userId": "user-id-who-created-the-book"
}
```

## 🧪 Testing with cURL

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### Login:
```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### Get all books:
```bash
curl -X GET http://localhost:3000/api/books \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create a book:
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Book", "author": "Test Author", "genre": "Fiction", "publishedYear": 2023}'
```

## 🧪 Testing with Postman

1. **Import the collection** (if available) or create requests manually
2. **Set up environment variables:**
   - `baseURL`: `http://localhost:3000`
   - `token`: `<your_jwt_token>`

3. **Test sequence:**
   - Register a user
   - Login and copy the token
   - Use the token in Authorization header for book operations

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Passwords are hashed using bcrypt
- **Route Protection**: All book endpoints require authentication
- **User Authorization**: Users can only modify their own books
- **Error Handling**: Secure error responses without exposing sensitive data

## 📊 Data Persistence

- **Users**: Stored in `data/users.json`
- **Books**: Stored in `data/books.json`
- **Asynchronous Operations**: Uses `fs.promises` for non-blocking file operations

## 🚨 Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid input data
- **401 Unauthorized**: Missing or invalid authentication
- **403 Forbidden**: User doesn't have permission to modify resource
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server errors

## 🌟 Bonus Features

- ✅ **Search by Genre**: Filter books by genre
- ✅ **Pagination**: Paginated results for better performance
- ✅ **UUID Generation**: Unique IDs for books and users
- ✅ **Request Logging**: Logs all incoming requests
- ✅ **Middleware Architecture**: Clean separation of concerns

## 🚀 Future Enhancements

- [ ] Add input validation middleware
- [ ] Implement book categories and tags
- [ ] Add book rating and review system
- [ ] Include book cover image upload
- [ ] Add advanced search filters
- [ ] Implement user roles (admin, user)
- [ ] Add API rate limiting
- [ ] Include unit and integration tests

## 📝 API Documentation

For detailed API documentation, you can use tools like:
- **Postman** for testing and documentation
- **Swagger/OpenAPI** for interactive documentation
- **Thunder Client** (VS Code extension) for API testing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aman** - [@amanagod](https://github.com/amanagod)

**Project Link**: [https://github.com/amanagod/test](https://github.com/amanagod/test)

## 🙏 Acknowledgments

- Node.js and Express.js communities
- JWT.io for authentication standards
- All contributors and testers

---

⭐ **If you found this project helpful, please give it a star!** ⭐
