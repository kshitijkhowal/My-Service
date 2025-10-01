# Deployment Guide for Render

This guide will help you deploy your My Service API to Render.

## 🚀 Quick Deploy to Render

### Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub** (if not already done)
2. **Connect to Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Deploy:**
   - Render will use the configuration from `render.yaml`
   - No additional setup required!

### Option 2: Manual Configuration

1. **Create Web Service:**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service:**
   - **Name:** `my-service-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Health Check Path:** `/health`

3. **Set Environment Variables:**
   - `NODE_ENV` = `production`
   - `API_KEY` = (Generate a secure random string)
   - `LOG_LEVEL` = `info`

4. **Create Database:**
   - Click "New +" → "PostgreSQL" (or MongoDB)
   - **Name:** `my-service-db`
   - **Plan:** Free
   - Copy the connection string to `MONGODB_URI`

## 🔧 Production Features Enabled

When `NODE_ENV=production`, your server automatically:

### Security Enhancements
- ✅ **CORS Protection** - Only allows specified origins
- ✅ **Security Headers** - XSS protection, content type options, etc.
- ✅ **Trust Proxy** - Handles load balancer IPs correctly
- ✅ **No X-Powered-By** - Removes Express header

### Performance Optimizations
- ✅ **Reduced Logging** - Only logs important requests
- ✅ **Production Database Config** - Optimized connection settings
- ✅ **Error Handling** - No stack traces in production

### Monitoring
- ✅ **Health Check** - Available at `/health`
- ✅ **Structured Logging** - Winston logger configured
- ✅ **Graceful Shutdown** - Handles process termination

## 📋 Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NODE_ENV` | Yes | Environment mode | `production` |
| `PORT` | Yes | Server port | `10000` |
| `MONGODB_URI` | Yes | Database connection | `mongodb://...` |
| `API_KEY` | Yes | API authentication | `abc123...` |
| `LOG_LEVEL` | No | Logging level | `info` |
| `CORS_ORIGIN` | No | Allowed CORS origins | `https://yourapp.com` |

## 🧪 Testing Your Deployment

### Health Check
```bash
curl https://your-app-name.onrender.com/health
```

### Test API (with API key)
```bash
curl -H "x-api-key: your-api-key" \
     https://your-app-name.onrender.com/api/personal/profile
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check if all dependencies are in `package.json`
   - Ensure TypeScript compiles without errors
   - Run `npm run build` locally first

2. **Database Connection Fails:**
   - Verify `MONGODB_URI` is set correctly
   - Check if database is accessible from Render
   - Ensure database user has proper permissions

3. **API Key Issues:**
   - Make sure `API_KEY` is set in environment variables
   - Use the same key in your requests
   - Check if authentication middleware is working

4. **CORS Issues:**
   - Set `CORS_ORIGIN` environment variable
   - Check if your frontend domain is allowed
   - Verify CORS configuration in server.ts

### Logs and Debugging

1. **View Logs:**
   - Go to your service dashboard on Render
   - Click "Logs" tab
   - Check for error messages

2. **Debug Mode:**
   - Temporarily set `LOG_LEVEL=debug`
   - Redeploy to see more detailed logs

## 🚀 Advanced Configuration

### Custom Domain
1. Go to your service settings
2. Add your custom domain
3. Update DNS records as instructed

### Environment-Specific Settings
- **Development:** Full logging, relaxed CORS
- **Production:** Minimal logging, strict CORS, security headers

### Scaling
- **Free Plan:** 750 hours/month, sleeps after inactivity
- **Paid Plans:** Always-on, more resources, custom domains

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/node)
- [MongoDB on Render](https://render.com/docs/databases)

---

**Your API is now production-ready! 🎉**
