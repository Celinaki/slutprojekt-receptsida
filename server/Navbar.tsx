import { getSuggestedQuery } from '@testing-library/react';
import React, {useState} from 'react';
import style from '../cssmodules/NavbarMod.module.css'
const Navbar = () => {

    const [query,setQuery] = useState('');
    // const [result,setResult] = useState<Item[] | undefined>();

const textChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    console.log("Kalla på api query")
    const searchstring = event.target.value;
    setQuery(searchstring)
    console.log(searchstring)
};
    return(

    

    <div className={style.wrapper}>
        <h1 className={style.heading} >
            Green foodheart
        </h1>  

        <input type="text" 
        className={style.input}
        placeholder="Sök på ett recept"
        onChange={textChange}
        /> 
</div>
    )
}
export default Navbar