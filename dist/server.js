"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./config/logger"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const notFound_1 = require("./middlewares/notFound");
// Load environment variables
dotenv_flow_1.default.config();
// Create Express app
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Request logging middleware
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
// Routes
app.use('/', routes_1.default);
// Error handling middleware
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
// Start server
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.listen(PORT, () => {
    logger_1.default.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    logger_1.default.error('Unhandled Promise Rejection:', err);
    process.exit(1);
});
// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    logger_1.default.error('Uncaught Exception:', err);
    process.exit(1);
});
exports.default = app;
