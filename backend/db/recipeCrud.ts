import RecipeModel, { RecipeType } from "./models/recipe";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}

export const getRecipesById = async (id:string) => {
    const recipe = await RecipeModel.findById({_id:id})
    return recipe
}


// getRecipes.find({title: /+params+/})

export const getRecipesBySearch = async (query:any) => {
    const recipe = await RecipeModel.find({  
         title: { $regex: query, $options: 'i'} 
    
})
    return recipe
}


// export const updateRatingById = async(id:string, rating:number) => {
//     const recipe = await RecipeModel.findByIdAndUpdate(id);
//     if(recipe){
//         recipe.ratings.push(rating);
//         recipe.save();
//         return recipe;
//     }
// }

export const pushRatingById = async (id: string, rating: number) => {
    const recipe = await RecipeModel.findOneAndUpdate(
        { _id: id },
        { $push: { ratings: rating } },
    );
}
