import RecipeModel, { RecipeType } from "./models/recipe";

export const getCategories = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}


export const getCategoryByTitle = async (category: string) => {
    const recipe = await RecipeModel.find({ category: category })
    return recipe
}


// getRecipes.find({title: /+params+/})

// export const getCategoriesBySearch = async (query:string) => {
//     const recipe = await RecipeModel.find({$or: [
//         { category: { $regex: query, $options: 'i' } }
//     ]
// })
//     return recipe
// }

export const getCategoriesBySearch = async (params: string, query: any) => {
    const recipe = await RecipeModel.find(
{
           category: params ,
        title: { $regex: query, $options: 'i' }}
    
)
return recipe
}