import React from 'react'
import CV from '../../assate/cv.pdf'
// import './header.module.css'
export const CTA = () => {
    return (
        <div className='cta'>
            <a className='button' target='_blank' href={'https://drive.google.com/file/d/1V4G3AQLXnMJIOzQbjJaYkZ_vTcHsL7F0/view?usp=sharing'} download>download CV</a>
            <a className=' cv__btn' href='#contact'>Contact Me</a>
        </div>
    )
}