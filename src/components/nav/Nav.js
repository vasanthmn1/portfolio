import React from 'react'
import './nav.css'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiFillFile } from 'react-icons/ai'
import { BiBook, BiMessage } from 'react-icons/bi'
import { Link } from 'react-scroll';


export const Nav = () => {
    const [active, setactive] = useState('')
    return (
        <nav>
            <Link
                activeClass="active" to="banner" spy={true} smooth={true} offset={-100} duration={100}  >
                <AiOutlineHome />

            </Link>

            <Link
                activeClass="active" to="skin" spy={true} smooth={true} offset={-100} duration={100}
            ><BiBook /></Link>
            <Link
                activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={100}
            ><AiFillFile /></Link>
            <Link
                activeClass="active" to="contact" spy={true} smooth={true} offset={-500} duration={100}

            ><AiOutlineUser /></Link>
        </nav>
    )
}
