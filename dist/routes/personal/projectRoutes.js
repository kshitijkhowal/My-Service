"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../../controllers/personal");
const router = (0, express_1.Router)();
// Project routes
router.route('/')
    .get(personal_1.getAllProjects)
    .post(personal_1.createProject);
router.route('/:id')
    .get(personal_1.getProjectById)
    .put(personal_1.updateProject)
    .delete(personal_1.deleteProject);
exports.default = router;
