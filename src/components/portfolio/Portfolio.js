import React, { useState } from 'react';

import './portfolio.css';
import { useCopyToClipboard } from 'react-use';
import { FaCopy } from 'react-icons/fa'
import { toast } from 'react-hot-toast';
import { portfolio_data } from '../../data/portfolio_data';
export const Portfolio = () => {
    const [open, setOpen] = useState('');
    const [state, copyToClipboard] = useCopyToClipboard();


    // let texts = "Copy this";
    const handleClick = (idx) => {
        setOpen(open === idx ? '' : idx);


    };

    return (
        <div id="portfolio" className="container pb-5">
            <div>

            </div>
            <div className="row">
                <h1 className="mt-4 mb-4 text-center">
                    <span>P</span>rojects
                </h1>

                {portfolio_data.map((val, idx) => (
                    <div
                        className="col-lg-4 col-md-6 mb-5 d-flex justify-content-center align-items-center"
                        key={idx}
                    >
                        <div className=" portfolio__card">
                            <div className='img__box'>
                                <img
                                    loading="lazy"
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
                                <div>
                                    {val.optiontitle && (
                                        <div className="select" defaultValue={"Credentials"}>
                                            {"Credentials"}

                                            <div className="select__dropdown">

                                                <div className="select__option">{val.optiontitle}</div>
                                                {val.optionpath && <div className="select__option">{val.optionpath}</div>}
                                                <div className="select__option" >
                                                    Eamil:  {val.admilEmail}
                                                    <span className="copybtn" onClick={() => {
                                                        copyToClipboard(val.admilEmail)
                                                        toast(`Copy ${val.admilEmail}`, {
                                                            icon: `💚 `,
                                                            style: {
                                                                height: "50px",

                                                            },
                                                        });
                                                    }}>
                                                        <FaCopy />
                                                    </span>
                                                </div>
                                                <div className="select__option">
                                                    Password:  {val.admilpassword}
                                                    <span className="copybtn"


                                                        onClick={() => {
                                                            copyToClipboard(val.admilpassword)
                                                            toast(`Copy ${val.admilpassword}`, {
                                                                icon: `💚 `,
                                                                style: {
                                                                    height: "50px",
                                                                    // borderRadius: '10px',
                                                                    // background: 'red',
                                                                    // color: '#fff',
                                                                },
                                                            });
                                                        }}>
                                                        <FaCopy />
                                                    </span>
                                                </div>

                                                {val.optiontitle2 &&
                                                    <>
                                                        <div className="select__option">
                                                            {val.optiontitle2}</div>
                                                        <div className="select__option" >
                                                            Eamil:  {val.userEmail}
                                                            <span className="copybtn" onClick={() => {
                                                                copyToClipboard(val.userEmail)
                                                                toast(`Copy ${val.userEmail}`, {
                                                                    icon: `💚 `,
                                                                    style: {
                                                                        height: "50px",

                                                                    },
                                                                });
                                                            }}>
                                                                <FaCopy />
                                                            </span>
                                                        </div>
                                                        <div className="select__option">
                                                            Password:  {val.userpassword}
                                                            <span className="copybtn"


                                                                onClick={() => {
                                                                    copyToClipboard(val.userpassword)
                                                                    toast(`Copy ${val.userpassword}`, {
                                                                        icon: `💚 `,
                                                                        style: {
                                                                            height: "50px",

                                                                        },
                                                                    });
                                                                }}>
                                                                <FaCopy />
                                                            </span>
                                                        </div>
                                                    </>}
                                                {val.optioncode && <div className="select__option">

                                                    <span className="copybtn" onClick={() => {
                                                        copyToClipboard(val.optioncode)
                                                        toast(`Copy ${val.optioncode}`, {
                                                            icon: `💚 `,
                                                            style: {
                                                                height: "50px",

                                                            },

                                                        });
                                                    }}>
                                                        <FaCopy title='Copy' />
                                                    </span>
                                                    {val.optioncode}</div>}

                                            </div>

                                        </div>
                                    )}</div>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


