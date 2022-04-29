import Recipe from "../models/recipe"

export const getRecipes = async (title:string) => {
    const recipes = await Recipe.find({title:title})
        return recipes
}