import RecipeModel from "../Models/recipeModel.js";
import mongoose from 'mongoose';

// Create New Recipe

export const createRecipe = async (req, res) => {
  const newRecipe = new RecipeModel(req.body)

  try {
    await newRecipe.save()
    res.status(200).json("Recipe created!")
  } catch (error) {
    res.status(500).json(error)
  }
}

// Get a Recipe

export const getRecipe = async (req, res) => {
  const id = req.params.id

  try {
    const post = await RecipeModel.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)

  }
}

// Delete a Recipe

export const deleteRecipe = async (req, res) => {
  const id = req.params.id;
  const { userID } = req.body;
  try {
    const recipe = await RecipeModel.findById(id);
    if (recipe.userID === userID) {
      await recipe.deleteOne();
      res.status(200).json("Recipe deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}