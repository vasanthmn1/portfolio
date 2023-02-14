import React, { useRef, useState } from 'react'
import './contact.css'
import { AiOutlineFacebook, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



export const Contact = () => {
    const form = useRef()

    const sentEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_joixy47', 'template_lizzjdj', form.current, 'lsN6VBHxPzFNhYkam')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            })



        e.target.reset()
        // toast.success(' Send message success ', {
        //     position: toast.POSITION.TOP_RIGHT
        // });
    }
    return (
        <div id='contact'>

            <h1 className='text-center'>Contact Me</h1>
            <div className='container contact__container'>


                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='contact__options'>
                            <a href='mailto:mnvasanthcode@gmail.com' className='contact__detail' >
                                <article className='contact__option'>

                                    <AiOutlineMail className='contact_icon' />
                                    <h4>Email</h4>
                                    <h5 style={{ fontSize: 15 }}>mnvasanthcode@gmail.com</h5>

                                </article>
                            </a>
                            <a href='https://wa.me/919003259352' className='contact__detail' target={'_blank'}>
                                <article className='contact__option'>

                                    <AiOutlineWhatsApp className='contact_icon' />
                                    <h4>WhatsApp</h4>
                                    <h5>+919003259352</h5>
                                </article>
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-8'>

                        <form action='' ref={form} onSubmit={sentEmail}>

                            <input type="text"
                                placeholder='Your Name'
                                name='name'
                            />
                            <input type="text"
                                name='email'
                                placeholder='Your Email'
                                required />
                            <textarea type="text"
                                name='message'
                                placeholder='message'
                                required />
                            <button
                                // onClick={sentEmail}
                                className=' btn-contact' type='submit'
                                onclick={() => {
                                }}
                            >Sumit</button>
                        </form>
                    </div>
                </div>
            </div>
        </ div>
    )
}
