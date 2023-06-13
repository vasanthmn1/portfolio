import React, { useState } from 'react';
import projet1 from '../../assate/money.png';
import projet2 from '../../assate/interior.jpg';
import projet3 from '../../assate/blog.jpg';
import projet4 from '../../assate/astrology.jpg';


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
            optiontitle: "User",
            admilEmail: "Eamil: 1@gmail.com",
            admilpassword: "Password: 1@gmail.com"
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
            optiontitle: "Admin",
            admilEmail: "Eamil: admin@gmail.com",
            admilpassword: "Password:  admin1234",
            optionpath: "Adminpath:  ...../admin",
            optioncode: "Code:  1122",

        },
        {
            id: '3',
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
            optiontitle: "User",
            admilEmail: "Eamil: 1@gmail.com",
            admilpassword: "Password: 1@gmail.com"
        },
        {
            id: '4',
            title: 'Astrology',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/frontend-astrology',
                },
                {
                    backend: 'https://github.com/vasanthmn1/backend-astrology',
                },
            ],
            websiteUrl: 'https://celebrated-moonbeam-21c681.netlify.app/',
            img: projet4,
            optiontitle: "Admin",


            admilEmail: "Eamil: admin@gmail.com",
            admilpassword: "Password:  admin1234"

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

                                    {
                                        val.optiontitle &&
                                        <select className='select'  >
                                            <option >{val.optiontitle}</option>
                                            {val.optionpath && <option >{val.optionpath}</option>}

                                            <option >{val.admilEmail}</option>
                                            <option>  {val.admilpassword}</option>
                                            {val.optioncode && <option >{val.optioncode}</option>}


                                        </select>
                                    }

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
