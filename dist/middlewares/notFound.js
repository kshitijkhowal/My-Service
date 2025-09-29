"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const apiResponse_1 = require("../utils/apiResponse");
const notFound = (req, res, next) => {
    const message = `Route ${req.originalUrl} not found`;
    (0, apiResponse_1.sendNotFound)(res, message);
};
exports.notFound = notFound;
