import express from "express";
import { createRecipe, deleteRecipe, getRecipe } from "../Controllers/RecipeController.js";

const router = express.Router()

router.post('/', createRecipe)
router.get('/:id', getRecipe)
router.delete("/:id", deleteRecipe)

export default router;