import { Response } from 'express';
import { ApiResponse } from '../types/global';

/**
 * Send a success response
 */
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message: string = 'Success',
  statusCode: number = 200
): void => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data
  };
  
  res.status(statusCode).json(response);
};

/**
 * Send an error response
 */
export const sendError = (
  res: Response,
  message: string = 'Internal Server Error',
  statusCode: number = 500,
  error?: string
): void => {
  const response: ApiResponse = {
    success: false,
    message,
    error
  };
  
  res.status(statusCode).json(response);
};

/**
 * Send a validation error response
 */
export const sendValidationError = (
  res: Response,
  message: string = 'Validation Error',
  errors?: any
): void => {
  const response: ApiResponse = {
    success: false,
    message,
    error: errors
  };
  
  res.status(400).json(response);
};

/**
 * Send a not found response
 */
export const sendNotFound = (
  res: Response,
  message: string = 'Resource not found'
): void => {
  const response: ApiResponse = {
    success: false,
    message
  };
  
  res.status(404).json(response);
};

/**
 * Send an unauthorized response
 */
export const sendUnauthorized = (
  res: Response,
  message: string = 'Unauthorized'
): void => {
  const response: ApiResponse = {
    success: false,
    message
  };
  
  res.status(401).json(response);
};

/**
 * Send a forbidden response
 */
export const sendForbidden = (
  res: Response,
  message: string = 'Forbidden'
): void => {
  const response: ApiResponse = {
    success: false,
    message
  };
  
  res.status(403).json(response);
};
