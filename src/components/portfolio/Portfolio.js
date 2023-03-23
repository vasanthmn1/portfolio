import React from 'react'
import img from '../../assate/bg.jpg'
import projet1 from '../../assate/money.png'


import './portfolio.css'
export const Portfolio = () => {
    const data = [
        {
            id: "1",
            title: "Money mangement app",
            gitupUrl: "https://github.com/vasanthmn1/capstone-project-client",
            websiteUrl: "https://admirable-pudding-b31006.netlify.app/",
            img: projet1,
        },
        // {
        //     id: "2",
        //     gitupUrl: "https://github.com/vasanthmn1",
        //     websiteUrl: ""
        // },
        // {
        //     id: "3",
        //     gitupUrl: "https://github.com/vasanthmn1",
        //     websiteUrl: ""
        // },
        // {
        //     id: "4",
        //     gitupUrl: "https://github.com/vasanthmn1",
        //     websiteUrl: ""
        // },
        // {
        //     id: "5",
        //     gitupUrl: "https://github.com/vasanthmn1",
        //     websiteUrl: ""
        // },
    ]

    return (
        <div id='portfolio' className='container pb-5'>
            <div className='row'>'
                <h1 className='mt-4 mb-4 text-center' ><span>P</span>rojets</h1>

                {
                    data.map((val, idx) => {
                        return (
                            <div className='col-lg-4 col-md-6 mb-5' key={idx}>
                                <div className="card portfolio__card ">
                                    <img src={val.img} className="card-img-top portfolio__img" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <div className='portfolio__btns'>
                                            <a href={val.gitupUrl} target='_blank' className='githup__btn'>Githup</a>
                                            <a href={val.websiteUrl} target='_blank' className='website__btn'>Website</a>
                                        </div>
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
