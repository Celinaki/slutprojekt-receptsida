import express, { json, Request, Response } from 'express'
import animalRouter from './routes/animal';
import { connect } from 'mongoose';
import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';
import RecipeModel from './db/models/recipe';
connect('mongodb+srv://Celina:<PASSWORD>@cluster0.8qoep.mongodb.net/recept?retryWrites=true&w=majority')

const cors = require('cors');

const app = express();
app.use(cors());


app.use(json());
const port = 3000;

app.get('/',(req: Request, res: Response)=>{
    res.send('HEJSAN')
})

app.listen(port, () => {
    console.log(`Example app lyssnar på port ${port}`)
})

app.use('/animal', animalRouter)

app.use('/recipes',recipeRouter)

app.use('/category', categoryRouter)













