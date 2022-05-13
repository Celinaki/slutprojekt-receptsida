import { getSuggestedQuery } from '@testing-library/react';
import React, { FormEvent, useEffect, useState } from 'react';
import style from '../cssmodules/NavbarMod.module.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { Router } from 'express';
const Navbar = (props: any) => {

    const [linkTo, setLinkTo] = useState<any>([]);
    const [recipesFound, setRecipesFound] = useState([]);
    const [recipeSearch, setRecipeSearch] = useState('');
    const { recipeId } = useParams()
    const updateState = (val: string) => {
        props.onUpdateQuery(val)
    }
    const [menuTrue, setMenuTrue] = useState()

    const [foo, setFoo] = useState<any>('')
    return (
        <div className={style.navwrapper}>
            
            <Link to={'/'}> <h1 className={style.heading} >
                Greenylicious
            </h1>
            </Link>
            {(recipeId) ? '' : <form className={style.form} >
                <span className={style.hamburger}><hr /> <hr /> <hr /></span>
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



