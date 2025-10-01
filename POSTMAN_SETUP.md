# My Service API - Postman Collection

This directory contains a complete Postman workspace for testing the My Service API.

## 📁 Files Included

- `My-Service-API.postman_collection.json` - Complete API collection with all endpoints
- `My-Service-Environment.postman_environment.json` - Environment variables
- `POSTMAN_SETUP.md` - This setup guide

## 🚀 Quick Setup

### 1. Import Collection
1. Open Postman
2. Click **Import** button
3. Select `My-Service-API.postman_collection.json`
4. Click **Import**

### 2. Import Environment
1. Click **Import** button again
2. Select `My-Service-Environment.postman_environment.json`
3. Click **Import**

### 3. Set Environment Variables
1. Click the **Environment** dropdown (top right)
2. Select **"My Service Environment"**
3. Click the **eye icon** to view variables
4. Update the following variables:
   - `API_KEY`: Set your actual API key
   - `baseUrl`: Change if your server runs on different port

## 🔧 Configuration

### Environment Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `baseUrl` | `http://localhost:3000` | Your API base URL |
| `API_KEY` | `your-super-secret-api-key-here` | Your API authentication key |
| `profileId` | (empty) | Will be set automatically after creating profiles |
| `educationId` | (empty) | Will be set automatically after creating education records |
| `experienceId` | (empty) | Will be set automatically after creating experience records |
| `projectId` | (empty) | Will be set automatically after creating projects |
| `certificateId` | (empty) | Will be set automatically after creating certificates |

## 📋 Collection Structure

### 🏥 Health Check
- **GET** `/health` - Check API status (no auth required)

### 👤 Personal Profile
- **GET** `/api/personal/profile` - Get all profiles (no auth)
- **GET** `/api/personal/profile/:id` - Get profile by ID (no auth)
- **POST** `/api/personal/profile` - Create profile (🔒 API key required)
- **PUT** `/api/personal/profile/:id` - Update profile (🔒 API key required)
- **DELETE** `/api/personal/profile/:id` - Delete profile (🔒 API key required)

### 🎓 Education
- **GET** `/api/personal/education` - Get all education records (no auth)
- **GET** `/api/personal/education/:id` - Get education by ID (no auth)
- **POST** `/api/personal/education` - Create education record (🔒 API key required)
- **PUT** `/api/personal/education/:id` - Update education record (🔒 API key required)
- **DELETE** `/api/personal/education/:id` - Delete education record (🔒 API key required)

### 💼 Experience
- **GET** `/api/personal/experience` - Get all experience records (no auth)
- **GET** `/api/personal/experience/:id` - Get experience by ID (no auth)
- **POST** `/api/personal/experience` - Create experience record (🔒 API key required)
- **PUT** `/api/personal/experience/:id` - Update experience record (🔒 API key required)
- **DELETE** `/api/personal/experience/:id` - Delete experience record (🔒 API key required)

### 🚀 Projects
- **GET** `/api/personal/projects` - Get all projects (no auth)
- **GET** `/api/personal/projects/:id` - Get project by ID (no auth)
- **POST** `/api/personal/projects` - Create project (🔒 API key required)
- **PUT** `/api/personal/projects/:id` - Update project (🔒 API key required)
- **DELETE** `/api/personal/projects/:id` - Delete project (🔒 API key required)

### 🏆 Certificates
- **GET** `/api/personal/certificates` - Get all certificates (no auth)
- **GET** `/api/personal/certificates/:id` - Get certificate by ID (no auth)
- **POST** `/api/personal/certificates` - Create certificate (🔒 API key required)
- **PUT** `/api/personal/certificates/:id` - Update certificate (🔒 API key required)
- **DELETE** `/api/personal/certificates/:id` - Delete certificate (🔒 API key required)

## 🔐 Authentication

### Public Endpoints (No API Key Required)
- All **GET** requests
- Health check endpoint

### Protected Endpoints (API Key Required)
- All **POST**, **PUT**, **DELETE** requests

### API Key Usage
The collection automatically adds the API key to protected endpoints using the `x-api-key` header.

## 📝 Sample Data

Each POST request includes sample data that demonstrates the expected structure:

### Personal Profile
```json
{
  "name": "John Doe",
  "bio": "Full-stack developer with 5+ years of experience",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "socials": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/johndoe"
    }
  ],
  "resumeLinks": [
    {
      "title": "Resume 2024",
      "url": "https://example.com/resume.pdf"
    }
  ]
}
```

### Education
```json
{
  "degree": "Bachelor of Computer Science",
  "school": "University of Technology",
  "startDate": "2020-09-01",
  "endDate": "2024-06-30",
  "percentage": 85.5,
  "cgpa": 8.5,
  "marksheets": [
    {
      "title": "Semester 1 Results",
      "url": "https://example.com/marksheet1.pdf",
      "description": "First semester academic performance"
    }
  ]
}
```

### Experience
```json
{
  "role": "Senior Software Engineer",
  "company": "Tech Corp",
  "startDate": "2022-01-15",
  "endDate": "2024-12-31",
  "duration": "3 years",
  "responsibilities": [
    "Developed scalable web applications using React and Node.js",
    "Led a team of 5 developers in agile environment"
  ]
}
```

## 🧪 Testing Workflow

1. **Start your server**: `npm run dev` or `npm start`
2. **Test health check**: Run the health check request
3. **Set your API key**: Update the `API_KEY` environment variable
4. **Create data**: Use POST requests to create records
5. **View data**: Use GET requests to retrieve records
6. **Update data**: Use PUT requests to modify records
7. **Delete data**: Use DELETE requests to remove records

## 🔄 Auto-Response Handling

The collection includes scripts that automatically:
- Add API key headers to protected endpoints
- Extract IDs from responses for use in subsequent requests
- Handle common error scenarios

## 🎯 Tips

1. **Use the environment**: Always select "My Service Environment" before testing
2. **Check responses**: Look at the response data to get IDs for update/delete operations
3. **Test both scenarios**: Try requests with and without API keys to verify security
4. **Use collections runner**: Run the entire collection to test all endpoints at once

## 🐛 Troubleshooting

### Common Issues

1. **401 Unauthorized**: Check if API key is set correctly
2. **Connection refused**: Ensure your server is running on the correct port
3. **404 Not Found**: Verify the endpoint URLs match your server routes
4. **Validation errors**: Check the request body format matches the expected schema

### Debug Steps

1. Check server logs for detailed error messages
2. Verify environment variables are set correctly
3. Test with curl commands to isolate issues
4. Check if the server is running on the expected port

## 📚 Additional Resources

- [Postman Documentation](https://learning.postman.com/docs/)
- [API Testing Best Practices](https://learning.postman.com/docs/writing-scripts/test-scripts/)
- [Environment Variables Guide](https://learning.postman.com/docs/sending-requests/variables/)

---

**Happy Testing! 🚀**
