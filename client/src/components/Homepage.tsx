import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'


const Home = () =>{
    const fetchData=async() =>{
        let url = 'http://localhost:3000/animal';
        let response = await fetch(url);
        
        let data = await response; 
        console.log(data)
    };

return(
<>

    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <section className={style.recipes} onClick={fetchData}>
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
}

export default Home