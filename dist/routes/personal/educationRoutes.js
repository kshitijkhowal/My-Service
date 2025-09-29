"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../../controllers/personal");
const router = (0, express_1.Router)();
// Education routes
router.route('/')
    .get(personal_1.getAllEducation)
    .post(personal_1.createEducation);
router.route('/:id')
    .get(personal_1.getEducationById)
    .put(personal_1.updateEducation)
    .delete(personal_1.deleteEducation);
exports.default = router;
