import { getSuggestedQuery } from '@testing-library/react';
import React, { FormEvent, useEffect, useState } from 'react';
import style from '../cssmodules/NavbarMod.module.css'
import { Link, Navigate, useNavigate, useParams, NavLink } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { Router } from 'express';
import hamb from '../assets/hamburgerFigma.svg'
import exit from '../assets/exit.png'


const Navbar = (props: any) => {

    const [linkTo, setLinkTo] = useState<any>([]);
    const [recipesFound, setRecipesFound] = useState([]);
    const [recipeSearch, setRecipeSearch] = useState('');
    const { recipeId } = useParams()
    const updateState = (val: string) => {
        props.onUpdateQuery(val)
    }
    const [menuTrue, setMenuTrue] = useState<boolean>(false)
    const [foo, setFoo] = useState<any>('')

    function openMenu() {
        setMenuTrue(true)
    }
    function closeMenu() {
        setMenuTrue(false)
    }
    return (
        <div className={style.navwrapper}>

            <Link to={'/'}> <h1 className={style.heading} >
                Greenylicious
            </h1>
            </Link>                <span className={style.hamburger}> <img src={hamb} alt="" onClick={openMenu} /></span>
                {(menuTrue === false) ? '' :
                    <div className={style.menumobile}>
                        <img src={exit} alt="" className={style.exit} onClick={closeMenu} />

                        <div className={style.categoriesmenu}>
                            {/* <h1>Kategorier</h1> */}

                            <NavLink to={`/category/seitan`}  
                            onClick={closeMenu} 
                            style={({ isActive }) => ({
                                color: isActive ? '#145858' : 'black'

                            })}>
                                <h2>Seitan</h2> 
                            </NavLink>

                            <NavLink to={`/category/pasta`}
                             onClick={closeMenu}
                                style={({ isActive }) => ({
                                    color: isActive ? '#145858' : 'black'

                                })}
                            >
                                <h2>Pasta-rätter </h2>
                            </NavLink>

                            <NavLink to={encodeURI(`/category/röror`)}
                             onClick={closeMenu}
                                style={({ isActive }) => ({
                                    color: isActive ? '#145858' : 'black'

                                })} >
                                <h2>Röror</h2>
                            </NavLink>

                            <NavLink to={`/category/frukost`} 
                             onClick={closeMenu}
                            style={({ isActive }) => ({
                                color: isActive ? '#145858' : 'black'
                            })}>
                                <h2>Frukost</h2>
                            </NavLink>

                        </div>
                    </div>
                    

                }
            {(recipeId) ? '' : <form className={style.form} >

                <input type="text"
                    id="searchText"
                    className={style.input}
                    placeholder="Sök på ett recept"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e.target.value)}
                // onKeyDown={handleKeyDown}
                />

                {/* <button>Sök </button> */}

            </form>}


        </div>
    );


}

export default Navbar



