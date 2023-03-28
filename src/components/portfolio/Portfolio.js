import React, { useRef, useState } from 'react'
import img from '../../assate/bg.jpg'
import projet1 from '../../assate/money.png'
import projet2 from '../../assate/uvideo.jpg'



import './portfolio.css'
export const Portfolio = () => {

    const [open, setopen] = useState(false)

    // const githupref = useRef()
    // const btnref = useRef()


    // window.addEventListener('click', (e) => {
    //     if (e.target !== githupref.current && e.target !== btnref.current) {
    //         setopen(false)
    //     }
    // })

    const data = [
        {
            id: "1",
            title: "Money mangement app",
            gitupUrl: [
                {
                    frontend: "https://github.com/vasanthmn1/capstone-project-client"
                },
                {
                    backend: "https://github.com/vasanthmn1/capstone-project-backend"
                }
            ],
            websiteUrl: "https://admirable-pudding-b31006.netlify.app/",
            img: projet1,
        },
        {
            id: "2",
            title: "U videos",
            gitupUrl: [
                {
                    frontend: ""
                },
                {
                    backend: ""
                }
            ],
            img: projet2
        },
    ]





    return (
        <div id='portfolio' className='container pb-5'>
            <div className='row'>'
                <h1 className='mt-4 mb-4 text-center' ><span>P</span>rojets</h1>

                {
                    data.map((val, idx) => {
                        return (
                            <div className='col-lg-4 col-md-6 mb-5 d-flex justify-content-center align-items-center' key={idx}>
                                <div className="card portfolio__card ">
                                    <img src={val.img} className="card-img-top portfolio__img" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <div className='portfolio__btns'>
                                            {/* {console.log(val.gitupUrl)} */}
                                            <a target='_blank' className='githup__btn' onClick={() => setopen(!open)}>Githup</a>

                                            <a href={val.websiteUrl} target='_blank' className='website__btn'>Website</a>
                                        </div>

                                        {
                                            open &&
                                            (
                                                <div className='click_btn' onClick={() => setopen(false)}>
                                                    <a className='frontend_btn' rel="noreferrer" target='_blank' href={val.gitupUrl[0].frontend}>Frontend </a>
                                                    <a className='backend_btn' rel="noreferrer" target='_blank' href={val.gitupUrl[1].backend}>backend</a>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
