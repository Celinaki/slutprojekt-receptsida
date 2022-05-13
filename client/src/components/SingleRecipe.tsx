import style from '../cssmodules/SingleRecipeMod.module.css'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import StarRatings from './ratings'
import Navbar from './Navbar'

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { recipeId } = useParams()
    useEffect(() => {
        console.log(recipeId)
        const url = `http://localhost:3000/recipes/${recipeId}`
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res)
                setRecipe(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    const [voted, setVote] = useState(false)
    const setClicked = () => {
        setVote(true)


    }

    return (
        <>
        
            <Navbar />
            <div className={style.bigwrapper}>
                <Sidebar />
                <div className={style.recipewrap}>
                    <article className={style.card}>
                        <h1>{recipe.title}</h1>
                        <section className={style.imgdescr}>
                            <img src={recipe.imgUrl} alt="" className={style.bigimg} />
                            <h2>{recipe.description} </h2>
                        </section>
                        <section className={style.instructions}>
                            <section className={style.lists}>
                                <h2>Ingredienser</h2>
                                <ul className={style.nodec}>
                                    {recipe.ingredients && recipe.ingredients?.map((ingredient: any) => (
                                        <li className={style.vegan} key={recipe._id}>&#x1f331;{ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)} {ingredient.amount} {ingredient.unit}</li>
                                    ))}                        </ul>
                            </section>
                            <section className={style.lists}>
                                <h2>Instruktioner</h2>
                                <ol className={style.ul}>
                                    {recipe.instructions && recipe.instructions?.map((step: any) => (
                                        <li key={step.index}>{step}</li>
                                    ))}
                                </ol>
                            </section>
                        </section>
                    </article>
                    <section className={style.rating}>

                        {/* <span  {setClicked((clicked) => false &&)} > test</span> */}
                        {(voted === false) ? <><h1>Lägg ett betyg!</h1> <span onClick={setClicked}>{recipe.ratings && <StarRatings edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} />}</span> </>: <h1>Tack för ditt betyg!</h1>}
                    </section>
                </div>


            </div>
        </>

    )
}
export default SingleRecipe