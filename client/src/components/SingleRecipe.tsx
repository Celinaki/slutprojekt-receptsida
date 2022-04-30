import style from '../cssmodules/SingleRecipeMod.module.css'
import Sidebar from './Sidebar'

const SingleRecipe = () => (
    <div className={style.wrapper}>
        <Sidebar />
        <div className={style.recipewrap}>
            <article className={style.card}>
                <h1>Receptnamn</h1>
                <section className={style.imgdescr}>
                    <img src="https://images.unsplash.com/photo-1612152328178-4a6c83d96429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
                    <h2>En härlig pastasås med champinjoner och lök. </h2>
                </section>
                <section className={style.instructions}>
                    <section>
                        <h2>Ingredienser</h2>
                        <ul className={style.nodec}>
                            <li>
                                $Name, $unit $amount
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Instruktioner</h2>
                        <ul>
                            <li>
                                Gräs
                            </li>
                            <li>
                                Gräs
                            </li>
                            <li>
                                Gräs
                            </li>
                            <li>
                                Gräs
                            </li>
                            
                        </ul>
                    </section>
                </section>
            </article>
            <section className={style.rating}>Fem</section>
        </div>


    </div>
)
export default SingleRecipe