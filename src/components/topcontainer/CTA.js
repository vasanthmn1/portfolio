import React from 'react'
import CV from '../../assate/cv.pdf'
// import './header.module.css'
export const CTA = () => {
    return (
        <div className='cta'>
            <a className='button' href={CV} download>download CV</a>
            <a className=' cv__btn' href='#contact'>Contact Me</a>
        </div>
    )
}