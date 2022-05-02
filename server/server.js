"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const mongoose = require('mongoose');
// import mongoose from "mongoose";
// import { receiveMessageOnPort } from "worker_threads";
mongoose.connect('mongodb://localhost:27017/recippe').catch((err) => console.log(err));
const recipe_1 = __importDefault(require("./routes/recipe"));
var express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//Routers
app.use('/recipe', recipe_1.default);
app.listen(port, () => console.log(`Server started on PORT ${port}`));
console.log("HEJ");
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
