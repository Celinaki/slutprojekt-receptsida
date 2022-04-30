import style from '../cssmodules/RecipeMod.module.css'

const RecipeComp = () =>(
<div className={style.wrapper}>
    <h1 >Ett recept</h1>
    <img 
    src="https://images.unsplash.com/photo-1604085804781-04a7d1adba36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    alt="" />
<hr />
<p>Description</p>
<section><p>Ingredienser: 15</p> <p>Min: 80</p></section>
</div>

)
export default RecipeComp