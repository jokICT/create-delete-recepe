import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  procedure: {
    type: String,
    required: true
  },
  ingredients: [],
  multiplierSize: {
    type: Number,
    required: true
  },
  servingSize: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  }
);

var RecipeModel = mongoose.model("Recipes", postSchema)
export default RecipeModel