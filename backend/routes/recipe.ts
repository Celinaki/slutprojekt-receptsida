import express,{Request, Response} from 'express';
import {getRecipes} from "../db/recipeCrud";

const router = express.Router()

router.get('/', async(req:Request,res:Response)=>{
    const recipes = await getRecipes();
    console.log(recipes)
    res.json(recipes)
})
export default router;