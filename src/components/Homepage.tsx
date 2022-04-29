import style from '../cssmodules/HomeMod.module.css'
import Sidebar from './Sidebar'
import RecipeComp from './RecipeComp'
const Home = () =>(
<>


    <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <RecipeComp></RecipeComp>
    </div>
</>
)

export default Home