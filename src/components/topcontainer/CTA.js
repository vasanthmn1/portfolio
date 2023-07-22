import React from 'react'
import CV from '../../assate/cv.pdf'
// import './header.module.css'
export const CTA = () => {
    return (
        <div className='cta'>
            <a className='button' target='_blank' href={'https://drive.google.com/file/d/1CcDl6NtAEZjfteBiB93lLH-pIediRKzp/view'} download>download CV</a>
            <a className=' cv__btn' href='#contact'>Contact Me</a>
        </div>
    )
}