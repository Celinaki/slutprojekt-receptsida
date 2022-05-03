import style from '../cssmodules/RecipeMod.module.css'

const RecipeComp = ({recept} :any) =>{
    function calculateIngredients(){
     let cart = 0;
     for(let ingredient of recept.ingredients){
         cart++
     }   
     return cart
    }
    return(
<div className={style.wrapper}>
    <h1>{recept.title}</h1>
    <img 
    src="https://images.unsplash.com/photo-1604085804781-04a7d1adba36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    alt="" />
<hr />
<p>{recept.description}</p>
<section><p>Ingredienser: {calculateIngredients()}</p> <p>Min: {recept.timeInMins}</p></section>
</div>

)}
export default RecipeComp