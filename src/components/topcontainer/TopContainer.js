import React from 'react'
import { CTA } from './CTA'
import './topContainer.css'
import profile from '../../assate/profile.jpg'
import { SocialMedia } from './SocialMedia'
export const TopContainer = () => {
    return (
        <div className='topContainer__container container'>
            <div className=' row '>
                <div className='col-lg-7 mt-lg-5  mt-sm-1  mb-sm-5  '>
                    <div>
                        <h4><b>Hi I'm</b></h4>
                        <h1 className='name'>Vasanth M N</h1>
                        <h3>Mern Stack Developer</h3>
                    </div>
                    <CTA />
                    <SocialMedia />
                </div>
                <div className='col-lg-5 '>
                    <div className='image'>
                        <div className='Vib'>Developer</div>
                        <img src={profile} alt='profile' />
                    </div>

                </div>

            </div>

        </div>
    )
}
