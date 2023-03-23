import React from 'react'
import mongoDb from '../../assate/mongodb.png'
import express from '../../assate/express.png'
import nodejs from '../../assate/nodejs.png'
import { Progress } from './Progress'
export const Backend = () => {
    return (
        <div className='mt-4'>
            <div className='mb-4 d-flex  '>
                <img src={nodejs} alt='nodejs' className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="30" />

                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={express} alt="express " className='ms-3 ' />
                <div className='ms-3'>
                    <Progress done="60" />
                </div>
            </div>
            <div className='mb-4 d-flex'>
                <img src={mongoDb} alt="mongoDb" className='ms-3 ' />

                <div className='ms-3'>
                    <Progress done="50" />

                </div>
            </div>






        </div>
    )
}
