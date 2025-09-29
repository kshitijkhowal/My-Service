import { Request, Response, NextFunction } from 'express';
import { sendNotFound } from '../utils/apiResponse';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const message = `Route ${req.originalUrl} not found`;
  sendNotFound(res, message);
};
