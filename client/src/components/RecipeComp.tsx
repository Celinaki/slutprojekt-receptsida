import style from '../cssmodules/RecipeMod.module.css'
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import { receiveMessageOnPort } from 'worker_threads';
import StarRatings from './ratings'


const RecipeComp = ({recept} :any) =>{
    function calculateIngredients(){
     let cart = 0;
     for(let ingredient of recept.ingredients){
         cart++
     }   
     return cart
    }
    return(
<div className={style.hold}>
<Link to={`/recipe/${recept._id}`}> 
<div className={style.cardwrapper}>
    <h1>{recept.title}</h1>
    <img 
    src={recept.imgUrl}
    alt="" className={style.img}/>
<hr />
<p>{recept.description}</p>
<section className={style.section}>
    <p>Ingredienser: <p className={style.circle}>{calculateIngredients()}</p></p>
     <p> Min: <p className={style.circle}> {recept.timeInMins}</p></p>
     </section>
<StarRatings recipeRatings={recept.ratings} recipeId={recept._id} edit={false}/>

</div>
</Link></div>
)}
export default RecipeComp