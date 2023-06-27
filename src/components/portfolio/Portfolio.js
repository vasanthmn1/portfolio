import React, { useState } from 'react';
import projet1 from '../../assate/money.png';
import projet2 from '../../assate/interior.jpg';
import projet3 from '../../assate/blog.jpg';
import projet4 from '../../assate/astrology.jpg';
import projet5 from '../../assate/chat.jpg';
import projet6 from '../../assate/gunshop.jpg';
import './portfolio.css';
import { useCopyToClipboard } from 'react-use';
import { FaCopy } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast';
export const Portfolio = () => {
    const [open, setOpen] = useState('');
    const [text, setText] = useState('');
    const [state, copyToClipboard] = useCopyToClipboard();

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
            admilEmail: " 1@gmail.com",
            admilpassword: " 1@gmail.com"
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
            admilEmail: "admin@gmail.com",
            admilpassword: " admin1234",
            optionpath: "...../admin",
            optioncode: "1122",

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
            admilEmail: " 1@gmail.com",
            admilpassword: " 1@gmail.com"
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
            admilEmail: "admin@gmail.com",
            admilpassword: " admin1234",
            optiontitle2: "User",
            userEmail: "1@gmail.com",
            userpassword: "1@gmail.com"
        },
        {
            id: '5',
            title: 'Mini Chat',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/minichat-frontend',
                },
                {
                    backend: 'https://github.com/vasanthmn1/minichat-backend',
                },
            ],
            websiteUrl: 'https://clever-chaja-38768f.netlify.app/',
            img: projet5,
            // optiontitle: "Admin",


            // admilEmail: "Eamil: admin@gmail.com",
            // admilpassword: "Password:  admin1234"
        },
        {
            id: '6',
            title: 'OnGuns',
            gitupUrl: [
                {
                    frontend: 'https://github.com/vasanthmn1/frontend-gunshop',
                },
                {
                    backend: 'https://github.com/vasanthmn1/backend-gunshop-stripe',
                },
            ],
            websiteUrl: 'https://magical-melba-799351.netlify.app/',
            img: projet6,
            admilEmail: "admin@gmail.com",
            admilpassword: " admin1234"

        },
    ];
    // let texts = "Copy this";
    const handleClick = (idx) => {
        setOpen(open === idx ? '' : idx);
        console.log(open);
        console.log("idx" + idx);
        setText(`${data[idx].admilEmail}`);
        // \n${data[idx].admilpassword}
        // setText(`${data[idx].admilEmail}\n${data[idx].admilpassword}`);
    };
    // console.log(text);


    // const handleCopyText = (text) => {
    //     copyToClipboard(text);
    //     setText('')
    // };
    return (
        <div id="portfolio" className="container pb-5">
            <div>ssasa

            </div>
            <div className="row">
                <h1 className="mt-4 mb-4 text-center">
                    <span>P</span>rojects
                </h1>

                {data.map((val, idx) => (
                    <div
                        className="col-lg-4 col-md-6 mb-5 d-flex justify-content-center align-items-center"
                        key={idx}
                    >
                        <div className=" portfolio__card">
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
                                <div>
                                    {val.optiontitle && (
                                        <div className="select" defaultValue={"Credentials"}>
                                            {"Credentials"}
                                            <Toaster
                                                position="bottom-center"
                                                reverseOrder={false}
                                            />
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

// export default Portfolio;

{/* {
                                        val.optiontitle &&
                                        <select className='select'  >
                                            <option >{val.optiontitle}</option>
                                            {val.optionpath && <option >{val.optionpath}</option>}
                                            {/* && <button> <FaCopyright /></button> */}
{/* <span className='copybtn'>
                                        <FaRegCopyright />
                                    </span>
                                    <option > <FaRegCopyright className='copybtn' />  {val.admilEmail}   <span className='copybtn'>
                                        <FaRegCopyright />
                                    </span> </option>
                                    <option>  {val.admilpassword}</option>
                                    {val.admilpassword && <option >    <span className='copybtn'>
                                        <FaRegCopyright />
                                    </span></option>}
                                    {val.optioncode && <option >{val.optioncode}</option>} */}


{/* </select>
                                    } */}