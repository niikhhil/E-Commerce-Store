import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { createCategory, updateCategory, removeCategory, listCategory, readCategory } from "../controllers/categoryController.js";
import express from "express";
const router = express.Router();


router.route('/').post(authenticate, authorizeAdmin, createCategory);
router.route('/:categoryId')
    .put(authenticate, authorizeAdmin, updateCategory)
    .delete(authenticate, authorizeAdmin, removeCategory);
router.route('/categories').get(listCategory);
router.route('/:id').get(readCategory);
export default router;