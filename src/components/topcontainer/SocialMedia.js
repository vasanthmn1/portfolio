import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
export const SocialMedia = () => {
    return (
        <div className='social'>
            <a
                className='social__icons linkedin'
                href='https://www.linkedin.com/in/vasanth-mn-91b368246/' target="_blank"><BsLinkedin /></a>
            <a
                className='social__icons github'
                href='https://github.com/vasanthmn1' target="_blank"><BsGithub /></a>
        </div>
    )
}
