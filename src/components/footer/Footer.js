import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineFacebook, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div className='footer text-center'>
            <a
                title='linkedin'
                className='footer_icons'
                href='https://www.linkedin.com/in/vasanth-mn-91b368246/' target="_blank"><BsLinkedin /></a>
            <a
                title='Githup'
                className='footer_icons'
                href='https://github.com/vasanthmn1' target="_blank"><BsGithub />
            </a>
            <a
                title='Email'
                href='https://wa.me/919003259352' className='footer_icons' target={'_blank'}>
                <AiOutlineMail />
            </a>
            <a
                title='whatsApp'
                href='https://wa.me/919003259352' className='footer_icons' target={'_blank'}>
                <AiOutlineWhatsApp />
            </a>
        </div>
    )
}
