"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendForbidden = exports.sendUnauthorized = exports.sendNotFound = exports.sendValidationError = exports.sendError = exports.sendSuccess = void 0;
/**
 * Send a success response
 */
const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
    const response = {
        success: true,
        message,
        data
    };
    res.status(statusCode).json(response);
};
exports.sendSuccess = sendSuccess;
/**
 * Send an error response
 */
const sendError = (res, message = 'Internal Server Error', statusCode = 500, error) => {
    const response = {
        success: false,
        message,
        error
    };
    res.status(statusCode).json(response);
};
exports.sendError = sendError;
/**
 * Send a validation error response
 */
const sendValidationError = (res, message = 'Validation Error', errors) => {
    const response = {
        success: false,
        message,
        error: errors
    };
    res.status(400).json(response);
};
exports.sendValidationError = sendValidationError;
/**
 * Send a not found response
 */
const sendNotFound = (res, message = 'Resource not found') => {
    const response = {
        success: false,
        message
    };
    res.status(404).json(response);
};
exports.sendNotFound = sendNotFound;
/**
 * Send an unauthorized response
 */
const sendUnauthorized = (res, message = 'Unauthorized') => {
    const response = {
        success: false,
        message
    };
    res.status(401).json(response);
};
exports.sendUnauthorized = sendUnauthorized;
/**
 * Send a forbidden response
 */
const sendForbidden = (res, message = 'Forbidden') => {
    const response = {
        success: false,
        message
    };
    res.status(403).json(response);
};
exports.sendForbidden = sendForbidden;
