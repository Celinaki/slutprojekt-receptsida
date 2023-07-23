import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Route, BrowserRouter, Routes, useNavigate, useSearchParams} from 'react-router-dom'
import Navbar from './Navbar'


const CategoryView = () =>{
    const [recipeList,setRecipeList] = useState<any[]>([]);
    const [tempParam, setTempParam] = useState<any[]>([]);

    // const fetchData=async() =>{
    //     let url = 'http://localhost:3000/recipes';
    //     let response = await fetch(url);
        
    //     let data = await response.json(); 
    //     setRecipeList(data)
    //     console.log(data)
    //     console.log(data[0]._id)
    // };

    const [query, setQuery] = useState('')

    const handleQuery = (q : string) => {

         setQuery(q);
      
    }
    const {categoryTitle} = useParams()
    useEffect(() =>{
        console.log(query)
        console.log(categoryTitle)
        if(query && categoryTitle){
            axios.get(`https://web-production-a108.up.railway.app/category/${categoryTitle}/recipes?search=${query}`)    
                .then(res => {
                console.log(res)
                setRecipeList(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

        }
        else if(categoryTitle){
            axios.get(`https://web-production-a108.up.railway.app/category/${categoryTitle}`)
            .then(res => {
                console.log(res)
                setRecipeList(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else
        axios.get('https://web-production-a108.up.railway.app/category')
        .then(res => {
            console.log(res)
            setRecipeList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [categoryTitle,query])

let navigate = useNavigate();
return(
<>
<Navbar onUpdateQuery={handleQuery}/>
    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <section className={style.recipes}>
            {recipeList.map(recipe => <RecipeComp key={recipe._id} recept={recipe}></RecipeComp> )}

        </section>
    </div>
</>
)
}

export default CategoryView