import express from 'express';
import {getRecipes} from "../db/recipe";

const router = express.Router()

router.get('/', async(req,res)=>{
    const recipes = await getRecipes();
    console.log(recipes)
    res.json(recipes)
})
export default router;