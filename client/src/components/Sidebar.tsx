import styles from '../cssmodules/SidebarMod.module.css'
import { Route, BrowserRouter as Router, Routes, Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { count } from 'console'

const Sidebar = () => {
    // const [seitans, setSeitans] = useState()

    // useEffect(()=>{
    // axios.get(`http://localhost:3000/category/seitan`)
    // .then(res => {
    //     setSeitans(res.data)
    // })
    // .catch(err=>{
    //     console.log(err)
    // })

    // },[])

    const [seitans, setSeitans] = useState<any>()
    useEffect(() => {
        const fetchRec = async () => {
            await fetch('https://web-production-a108.up.railway.app/category/seitan')
                .then(res => res.json())
                .then(res => {
                    setSeitans([...res].length);
                    let amount = res.length
                    console.log(amount, "amount är såhär")
                    return amount
                })
        }
        const result = fetchRec()
    }, [])
    // <h2>{Object.keys(seitans).length}</h2>


    // const [seitans, setSeitans] = useState<any>()
    // async function countIt(){
    //     const fetchRec = await fetch('http://localhost:3000/category/seitan')
    //     .then(res=> res.json())
    //     .then(res=> {
    //         setSeitans([...res]);
    //         let amount = Object.keys(seitans).length
    //         console.log(amount, "amount är såhär")
    //         return amount
    //     })

    // }
    // countIt()

    const [pastas, setPastas] = useState<any>()
    useEffect(() => {
        const fetchRec = async () => {
            await fetch('https://web-production-a108.up.railway.app/category/pasta')
                .then(res => res.json())
                .then(res => {
                    setPastas([...res].length);
                    let amount = res.length
                    console.log(amount, "amount är såhär")
                    return amount
                })
        }
        const result = fetchRec()
    }, [])

    const [röror, setRöror] = useState<any>()
    useEffect(() => {
        const fetchRec = async () => {
            await fetch('https://web-production-a108.up.railway.app/category/röror')
                .then(res => res.json())
                .then(res => {
                    setRöror([...res].length);
                    let amount = res.length
                    console.log(amount, "amount är såhär")
                    return amount
                })
        }
        const result = fetchRec()
    }, [])

    const [frukost, setFrukost] = useState<any>()
    useEffect(() => {
        const fetchRec = async () => {
            await fetch('https://web-production-a108.up.railway.app/category/frukost')
                .then(res => res.json())
                .then(res => {
                    setFrukost([...res].length);
                    let amount = res.length
                    console.log(amount, "amount är såhär")
                    return amount
                })
        }
        const result = fetchRec()
    }, [])

    return (
        <div className={styles.sidewrapper}>
            <Link to={`/category`} >
                <h1>Kategorier</h1>
            </Link>

            <NavLink to={`/category/seitan`} style={({ isActive }) => ({
                color: isActive ? '#145858' : 'black'

            })}>
                <h2>Seitan  ( {seitans} )</h2>
            </NavLink>

            <NavLink to={`/category/pasta`}
                style={({ isActive }) => ({
                    color: isActive ? '#145858' : 'black'

                })}
            >
                <h2>Pasta-rätter  ( {pastas} )</h2>
            </NavLink>

            <NavLink to={encodeURI(`/category/röror`)}
                style={({ isActive }) => ({
                    color: isActive ? '#145858' : 'black'

                })} >
                <h2>Röror  ( {röror} )</h2>
            </NavLink>

            <NavLink to={`/category/frukost`} style={({ isActive }) => ({
                color: isActive ? '#145858' : 'black'

            })}>
                <h2>Frukost  ( {frukost} )</h2>
            </NavLink>

        </div>
    )
}
export default Sidebar