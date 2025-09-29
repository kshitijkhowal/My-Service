# Node.js Express MongoDB TypeScript Starter

A complete starter project with Node.js, Express, MongoDB, and TypeScript.

## Features

- **TypeScript** for type safety
- **Express.js** for REST API
- **MongoDB** with Mongoose ODM
- **Winston** for logging
- **Jest** for testing
- **dotenv-flow** for environment management
- **CORS** enabled
- **Error handling** middleware
- **API response** utilities

## Project Structure

```
src/
├── config/
│   ├── db.ts          # MongoDB connection
│   └── logger.ts      # Winston logger setup
├── controllers/       # Business logic
├── middlewares/       # Custom middlewares
├── models/           # Mongoose schemas
├── routes/           # Express routes
├── types/            # TypeScript type definitions
├── utils/            # Helper functions
└── server.ts         # Application entry point
```

## Models

- **Personal**: name, bio, email, socials
- **Education**: degree, school, year, cgpa
- **Experience**: role, company, duration, responsibilities[]
- **Project**: name, description, techStack[], link
- **Certificate**: title, issuer, year, link

## API Endpoints

### Personal Profile
- `GET /api/personal/profile` - Get all profiles
- `POST /api/personal/profile` - Create profile
- `GET /api/personal/profile/:id` - Get profile by ID
- `PUT /api/personal/profile/:id` - Update profile
- `DELETE /api/personal/profile/:id` - Delete profile

### Education
- `GET /api/personal/education` - Get all education records
- `POST /api/personal/education` - Create education record
- `GET /api/personal/education/:id` - Get education by ID
- `PUT /api/personal/education/:id` - Update education
- `DELETE /api/personal/education/:id` - Delete education

### Experience
- `GET /api/personal/experience` - Get all experience records
- `POST /api/personal/experience` - Create experience record
- `GET /api/personal/experience/:id` - Get experience by ID
- `PUT /api/personal/experience/:id` - Update experience
- `DELETE /api/personal/experience/:id` - Delete experience

### Projects
- `GET /api/personal/projects` - Get all projects
- `POST /api/personal/projects` - Create project
- `GET /api/personal/projects/:id` - Get project by ID
- `PUT /api/personal/projects/:id` - Update project
- `DELETE /api/personal/projects/:id` - Delete project

### Certificates
- `GET /api/personal/certificates` - Get all certificates
- `POST /api/personal/certificates` - Create certificate
- `GET /api/personal/certificates/:id` - Get certificate by ID
- `PUT /api/personal/certificates/:id` - Update certificate
- `DELETE /api/personal/certificates/:id` - Delete certificate

### Health Check
- `GET /health` - Server health status

## Environment Variables

The project uses `dotenv-flow` for environment management:

- `.env` - Development environment
- `.env.staging` - Staging environment  
- `.env.production` - Production environment

### Required Variables

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/my-service-dev
LOG_LEVEL=debug
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment files:
```bash
# Copy and modify the .env files as needed
cp .env.example .env
```

3. Start MongoDB (make sure MongoDB is running locally or update MONGODB_URI)

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Testing

The project includes Jest setup with:
- In-memory MongoDB for testing
- Supertest for API testing
- Test coverage reporting

## Logging

Winston logger is configured with:
- Console output for development
- File logging for errors and combined logs
- Different log levels based on environment

## Error Handling

- Global error handler middleware
- Custom error types
- Proper HTTP status codes
- Detailed error messages in development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

ISC
