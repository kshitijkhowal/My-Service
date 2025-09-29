"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../../controllers/personal");
const router = (0, express_1.Router)();
// Experience routes
router.route('/')
    .get(personal_1.getAllExperience)
    .post(personal_1.createExperience);
router.route('/:id')
    .get(personal_1.getExperienceById)
    .put(personal_1.updateExperience)
    .delete(personal_1.deleteExperience);
exports.default = router;
