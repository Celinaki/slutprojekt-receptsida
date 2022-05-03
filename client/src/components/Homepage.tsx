import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () =>{
    const [recipeList,setRecipeList] = useState<any[]>([]);


    const fetchData=async() =>{
        let url = 'http://localhost:3000/recipe';
        let response = await fetch(url);
        
        let data = await response.json(); 
        setRecipeList(data)
        console.log(data)
        console.log(data[0]._id)
    };
    // useEffect(() =>{
    //     axios.get('http://localhost:3000/recipe')
    //     .then(res => {
    //         console.log(res)
    //         setRecipeList(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }, [])

return(
<>

    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <section className={style.recipes} onClick={fetchData}>
            {recipeList.map(recipe => <RecipeComp key={recipe._id} recept={recipe}></RecipeComp> )}

        </section>
    </div>
</>
)
}

export default Home