import React from 'react'
import './nav.css'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiFillFile } from 'react-icons/ai'
import { BiBook, BiMessage } from 'react-icons/bi'



export const Nav = () => {
    const [active, setactive] = useState('')
    return (
        <nav>
            <a href='#'

                onClick={() => {
                    setactive('#')
                }}

                className={active === '#' ? 'active' : ""}><AiOutlineHome /></a>

            <a href='#skin'
                className={active === '#skin' ? 'active' : ""}
                onClick={() => {
                    setactive('#skin')
                }}><BiBook /></a>


            <a href='#portfolio'
                className={active === '#portfolio' ? 'active' : ""}
                onClick={() => {
                    setactive('#portfolio')
                }}><AiFillFile /></a>



            <a className={active === '#contact' ? 'active' : ""}
                onClick={() => {
                    setactive('#contact')
                }}

                href='#contact'><AiOutlineUser /></a>

        </nav>
    )
}
