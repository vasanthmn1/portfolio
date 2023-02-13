import React from 'react'
import js from '../../assate/js.png'
import html from '../../assate/html.png'
import css from '../../assate/css.png'
import bootstrap from '../../assate/bootstrap.png'
import tailwindcss from '../../assate/tailwindcss.png'
import react from '../../assate/react.png'
import { Progress } from './Progress'


import './skile.css'

export const Frontend = () => {
    return (
        <div className='mt-4'>
            <div className='mb-4 d-flex '>
                <img src={html} alt='html' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="90" />

                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={css} alt='css' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="85" />

                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={js} alt='js' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="65" />

                </div>
            </div>

            <div className='mb-4 d-flex'>
                <img src={bootstrap} alt='bootstrap' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="95" />

                </div>

            </div>

            <div className='mb-4 d-flex'>
                <img src={tailwindcss} alt='tailwindcss' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="90" />

                </div>

            </div>

            <div className='mb-4 d-flex '>
                <img src={react} alt='react' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="85" />

                </div>

            </div>




        </div>
    )
}
