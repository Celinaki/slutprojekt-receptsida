import express from "express";
import mongoose from "mongoose";
import { receiveMessageOnPort } from "worker_threads";
mongoose.connect('mongodb://localhost:27017/recipes').catch(err => console.log(err));

import recipeRouter from "./routes/recipe"



// var express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());


//Routers
app.use('/recipe', recipeRouter)


// Följande get ROUTES ska finnas:
// /recipes   hämtar info om alla recipesRouter
// /recipes?search=abs   hämtar alla recept filtrerade på en söksträng
// /recipes/:recipeId   hämtar all fino för ett receptsssss
// /category  ????????????? hämtar alla kategorier
// /category/:categoryId/recipes   hämtar recept för en viss kategori
// /category/:categoryId/recipes?search=abc   hämtar alla recept i en kategori filtrerade på en söksträng


//FÖLJANDE REACT ROUTES SKA FINNAS
//Startsida / listar alla recept, sök och kategori ska finnas
//Kategorisida /category/:categoryId samma som startsida, listar endas recept i viss kategori
//Receptssida /recipe/:recipeId ett recept visas, med all info.   





 
// app.listen(port, (err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", port);
// });