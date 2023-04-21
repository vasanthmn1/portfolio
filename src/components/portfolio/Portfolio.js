import React, { useState } from 'react';
import projet1 from '../../assate/money.png';
import projet2 from '../../assate/interior.jpg';
import projet3 from '../../assate/blog.jpg';

import './portfolio.css';

export const Portfolio = () => {
    const [open, setOpen] = useState('');

    const data = [
        {
            id: '1',
            title: 'Money management app',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/capstone-project-client',
                },
                {
                    backend: 'https://github.com/vasanthmn1/capstone-project-backend',
                },
            ],
            websiteUrl: 'https://admirable-pudding-b31006.netlify.app/',
            img: projet1,
        },
        {
            id: '2',
            title: 'Interior',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/interior-frontendapp',
                },
                {
                    backend: 'https://github.com/vasanthmn1/interior-bakend',
                },
            ],
            websiteUrl: 'https://master--chic-pithivier-376c30.netlify.app/',
            img: projet2,
        },
        {
            id: '2',
            title: 'Blog',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/blog-frontend',
                },
                {
                    backend: 'https://github.com/vasanthmn1/backend-blog',
                },
            ],
            websiteUrl: 'https://spontaneous-mooncake-060ef3.netlify.app/',
            img: projet3,
        },
    ];

    const handleClick = (idx) => {
        setOpen(open === idx ? '' : idx);
        console.log(open);
        console.log("idx" + idx);

    };

    return (
        <div id="portfolio" className="container pb-5">
            <div className="row">
                <h1 className="mt-4 mb-4 text-center">
                    <span>P</span>rojets
                </h1>

                {data.map((val, idx) => (
                    <div
                        className="col-lg-4 col-md-6 mb-5 d-flex justify-content-center align-items-center"
                        key={idx}
                    >
                        <div className="card portfolio__card">
                            <div className='img__box'>
                                <img
                                    src={val.img}
                                    className="card-img-top portfolio__img"
                                    alt="img"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <div className="portfolio__btns">
                                    <button
                                        className="githup__btn"
                                        onClick={() => handleClick(idx)}
                                    >
                                        Github
                                    </button>
                                    <a
                                        href={val.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="website__btn"
                                    >
                                        Website
                                    </a>
                                </div>
                                {open === idx && (
                                    <div className="click_btn">
                                        <a
                                            className="frontend_btn"
                                            href={val.gitupUrl[0].frontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Frontend
                                        </a>
                                        <a
                                            className="backend_btn"
                                            href={val.gitupUrl[1].backend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Backend
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// export default Portfolio;
