import { Request, Response, NextFunction } from 'express';
import { sendUnauthorized } from '../utils/apiResponse';
import logger from '../config/logger';

/**
 * API Key Authentication Middleware
 * Validates API key from request headers
 */
export const authenticateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Get API key from header (common patterns: x-api-key, authorization, api-key)
    const apiKey = req.headers['x-api-key'] as string || 
                   req.headers['authorization'] as string ||
                   req.headers['api-key'] as string;

    // Check if API key is provided
    if (!apiKey) {
      logger.warn(`Unauthorized access attempt - No API key provided from IP: ${req.ip}`);
      sendUnauthorized(res, 'API key is required');
      return;
    }

    // Get valid API key from environment
    const validApiKey = process.env.API_KEY;
    
    if (!validApiKey) {
      logger.error('API_KEY environment variable is not set');
      sendUnauthorized(res, 'Server configuration error');
      return;
    }

    // Validate API key
    if (apiKey !== validApiKey) {
      logger.warn(`Invalid API key attempt from IP: ${req.ip}`);
      sendUnauthorized(res, 'Invalid API key');
      return;
    }

    // API key is valid, proceed to next middleware
    logger.info(`Valid API key used from IP: ${req.ip}`);
    next();
  } catch (error) {
    logger.error('Error in API key authentication:', error);
    sendUnauthorized(res, 'Authentication error');
  }
};

/**
 * Optional API Key Middleware (for mixed public/private routes)
 * Only validates API key if provided, doesn't require it
 */
export const optionalApiKey = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers['x-api-key'] as string;
  
  if (apiKey) {
    // If API key is provided, validate it
    authenticateApiKey(req, res, next);
  } else {
    // If no API key provided, continue without authentication
    next();
  }
};
