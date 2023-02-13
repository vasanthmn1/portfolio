import React from 'react'
import mongoDb from '../../assate/mongodb.png'
import express from '../../assate/express.png'
import nodejs from '../../assate/nodejs.png'
import { Progress } from './Progress'
export const Backend = () => {
    return (
        <div className='mt-4'>
            <div className='mb-4 d-flex  '>
                <img src={nodejs} alt='nodejs' />
                <div className='ms-3'>
                    <Progress done="40" />

                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={express} alt="express" />
                <div className='ms-3'>
                    <Progress done="50" />

                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={mongoDb} alt="mongoDb" />

                <div className='ms-3'>
                    <Progress done="70" />

                </div>
            </div>






        </div>
    )
}
