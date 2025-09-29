"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = __importDefault(require("../config/logger"));
const apiResponse_1 = require("../utils/apiResponse");
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    // Log error
    logger_1.default.error(err);
    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = 'Resource not found';
        error = { ...error, message, statusCode: 404 };
    }
    // Mongoose duplicate key
    if (err.name === 'MongoError' && err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = { ...error, message, statusCode: 400 };
    }
    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message).join(', ');
        error = { ...error, message, statusCode: 400 };
    }
    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        const message = 'Invalid token';
        error = { ...error, message, statusCode: 401 };
    }
    if (err.name === 'TokenExpiredError') {
        const message = 'Token expired';
        error = { ...error, message, statusCode: 401 };
    }
    (0, apiResponse_1.sendError)(res, error.message || 'Server Error', error.statusCode || 500, process.env.NODE_ENV === 'development' ? err.stack : undefined);
};
exports.errorHandler = errorHandler;
