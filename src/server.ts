import express from 'express';
import cors from 'cors';
import dotenvFlow from 'dotenv-flow';
import connectDB from './config/db';
import logger from './config/logger';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';

// Load environment variables
dotenvFlow.config();

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration based on environment
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CORS_ORIGIN || false 
    : true,
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (reduced in production)
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // Log only errors and important requests in production
    if (req.path !== '/health' && (req.method !== 'GET' || req.path.includes('/api/'))) {
      logger.info(`${req.method} ${req.path} - ${req.ip}`);
    }
  } else {
    // Log all requests in development
    logger.info(`${req.method} ${req.path} - ${req.ip}`);
  }
  next();
});

// Routes
app.use('/', routes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = parseInt(process.env.PORT || '3000', 10);
const NODE_ENV = process.env.NODE_ENV || 'development';

// Production optimizations
if (NODE_ENV === 'production') {
  // Trust proxy for accurate IP addresses behind load balancers
  app.set('trust proxy', 1);
  
  // Disable x-powered-by header for security
  app.disable('x-powered-by');
  
  // Set security headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });
}

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
  
  if (NODE_ENV === 'production') {
    logger.info('Production optimizations enabled');
    logger.info('Security headers configured');
    logger.info('CORS configured for production');
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  logger.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

export default app;
