import express, { Request, Response } from 'express';
import { getCategoriesBySearch } from '../db/categoryCrud';
import { getRecipes, getRecipesBySearch, getRecipesById, pushRatingById } from "../db/recipeCrud";

const router = express.Router()

// router.get('/', async(req:Request,res:Response)=>{
//     if(Object.keys(req.query).length === 0){
//     const recipes = await getRecipes();
//     console.log(recipes)
//     res.json(recipes)
// }
// })
router.get('/:recipeId', async (req: Request, res: Response) => {
    const recipeById = await getRecipesById(req.params.recipeId);
    console.log(recipeById)
    res.json(recipeById)
})
router.get('/', async (req: Request, res: Response) => {
    if (req.query.search) {
        const recipesBySearch = await getRecipesBySearch(req.query.search)
        console.log(recipesBySearch)
        res.json(recipesBySearch)
    }
    else {
        const recipes = await getRecipes();
        res.json(recipes)
    }
})
// router.post('/:recipeId', async ( req:Request, res:Response) =>{
//     const recipe = await updateRatingById(req.params.recipeId, req.body.rating)
// });
router.post('/:recipeId/ratings',
    async (req: Request, res: Response) => {
        const gottenRecipe = await pushRatingById(req.params.recipeId, req.body.rating);
        res.status(200).json(gottenRecipe);
    });
// router.get('/search/:query',async(req:Request,res:Response)=>{
//     const recipesBySearch = await getRecipesBySearch(req.query.search)
//     console.log(recipesBySearch)
//     res.json(recipesBySearch)
// })

export default router;
