import React from 'react'
import { Backend } from './Backend'
import { Frontend } from './Frontend'

import './skile.css'

export const Skils = () => {
    return (
        <div className='skill__container' id='skin'>
            <div className='text-center'> <h1> <span>S</span>kils</h1></div>

            <div className='row bg-fro-back'>

                <div className='col-lg-6 '>
                    <h3 className='skill__title'>frontend</h3>
                    <div className='contatan_box '>
                        <Frontend />
                    </div>
                </div>
                <div className='col-lg-6 '>
                    <h3 className='skill__title'>backend</h3>
                    <div className='contatan_box  '>
                        <Backend />
                    </div>
                </div>
            </div>
        </div>
    )
}
