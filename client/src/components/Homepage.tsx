import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'
import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Route, BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import { getSuggestedQuery } from '@testing-library/react'


const Home = () =>{
    const [recipeList,setRecipeList] = useState<any[]>([]);


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
        console.log(q)

          setQuery(q);
         console.log(query)
     }

    useEffect(() =>{
        console.log('hej')
        if(query){
            axios.get(`https://planned-sammy-celinaki.koyeb.app/recipes/?search=${query}`)    
                .then(res => {
                console.log(res)
                setRecipeList(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

        }
        else{
             axios.get('https://planned-sammy-celinaki.koyeb.app/recipes')
        .then(res => {
            console.log(res)
            setRecipeList(res.data)
        })
        .catch(err=>{
            console.log(err)
        }) 
        }
      
    }, [query])
let navigate = useNavigate();
return(
<><Navbar onUpdateQuery={handleQuery}/>
    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <section className={style.recipes}>
            {recipeList.map(recipe => <RecipeComp key={recipe._id} recept={recipe}></RecipeComp> )}

        </section>
    </div>
</>
)
}

export default Home