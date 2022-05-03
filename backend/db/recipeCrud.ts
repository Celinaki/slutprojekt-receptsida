import RecipeModel, { RecipeType } from "./models/recipe";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}
// getRecipes.find({title: /+params+/})