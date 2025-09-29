"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileRoutes_1 = __importDefault(require("./profileRoutes"));
const educationRoutes_1 = __importDefault(require("./educationRoutes"));
const experienceRoutes_1 = __importDefault(require("./experienceRoutes"));
const projectRoutes_1 = __importDefault(require("./projectRoutes"));
const certificateRoutes_1 = __importDefault(require("./certificateRoutes"));
const router = (0, express_1.Router)();
// Mount all personal-related routes
router.use('/profile', profileRoutes_1.default);
router.use('/education', educationRoutes_1.default);
router.use('/experience', experienceRoutes_1.default);
router.use('/projects', projectRoutes_1.default);
router.use('/certificates', certificateRoutes_1.default);
exports.default = router;
