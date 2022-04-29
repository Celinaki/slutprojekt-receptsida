import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'
const Home = () =>(
<>


    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <section className={style.recipes}>
        <RecipeComp ></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        <RecipeComp></RecipeComp>
        </section>
    </div>
</>
)

export default Home