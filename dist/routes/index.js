"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = __importDefault(require("./personal"));
const router = (0, express_1.Router)();
// Mount routes
router.use('/api/personal', personal_1.default);
// Health check route
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});
exports.default = router;
