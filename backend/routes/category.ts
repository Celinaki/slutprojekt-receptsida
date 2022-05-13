import express,{Request, Response} from 'express';
import {getCategories, getCategoryByTitle, getCategoriesBySearch} from "../db/categoryCrud";

const router = express.Router()

router.get('/', async(req:Request,res:Response)=>{
    const recipes = await getCategories();
    console.log(recipes)
    res.json(recipes)
})

router.get('/:categoryTitle',async(req:Request,res:Response)=>{
    const categoryTitle = await getCategoryByTitle(req.params.categoryTitle);
    console.log(categoryTitle)
    res.json(categoryTitle)
})

// router.get('/search/:query',async(req:Request,res:Response)=>{
//     const categoriesBySearch = await getCategoriesBySearch(req.params.query);
//     console.log(categoriesBySearch)
//     res.json(categoriesBySearch)
// })
router.get('/:categoryTitle/recipes',async(req:Request,res:Response)=>{
    const categoriesBySearch = await getCategoriesBySearch(req.params.categoryTitle, req.query.search);
    console.log(req.query)
    console.log(categoriesBySearch)
    res.json(categoriesBySearch)
})

export default router