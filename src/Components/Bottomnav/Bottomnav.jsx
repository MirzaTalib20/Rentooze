import React, { useEffect, useState } from 'react';
import './Bottomnav.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Bottomnav() {

    const navigate = useNavigate();
    const location = useLocation();
    //const {category} = useParams();

    const [navTabIndex, setNavTabIndex] = useState(0);

    const navTabFunc = (i) => {
        setNavTabIndex(i);
    }

    useEffect(() => {
        // Set navTabIndex based on the current path
        if (location.pathname === '/') {
            setNavTabIndex(0);
        } else if (location.pathname === '/View-All') {
            setNavTabIndex(3);
        } else if (location.pathname === '/blog') {
            setNavTabIndex(4);
        }
        // Add more conditions here for other paths
    }, [location.pathname]);

    return (
        <div className="bottomNavCont mx-autp pb-2">
            <div className="bottomNav mx-auto px-3 d-flex justify-content-between align-items-center rounded-pill bg-brand-blue">
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 0 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(0); navigate('/') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/Home.svg" alt="suitcase" className={`img-fluid homesvg ${navTabIndex === 0 ? 'svgiconActive' : ''}`} />
                        {
                            navTabIndex === 0 ? (
                                <span className="navTabSpan bricolage-bold ms-2">Home</span>
                            ) : ''
                        }
                    </div>
                </div>
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 3 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(3); navigate('/View-All') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/download.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 3 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 3 ? (
                            <span className="navTabSpan bricolage-bold extrasvg ms-2">Product</span>
                        ) : ''
                    }
                </div>
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 1 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(1); window.open('https://wa.me/+919819570211', '_self') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/whatsapp.svg" alt="suitcase" className={`img-fluid svgicon whaticon ${navTabIndex === 1 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 1 ? (
                            <span className="navTabSpan bricolage-bold ms-2">Chat</span>
                        ) : ''
                    }
                </div>
                <div className={`tabIcon  align-items-center text-center mb-0 p-0 ${navTabIndex === 2 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(2); window.open('tel:+919819570211', '_self') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/phone-call.svg" alt="suitcase" className={`img-fluid svgicon whaticon ${navTabIndex === 2 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 2 ? (
                            <span className="navTabSpan bricolage-bold ms-2">Call</span>
                        ) : ''
                    }
                </div>
                <div className={`tabIcon  align-items-center text-center mb-0 p-0 ${navTabIndex === 4 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(4); navigate('/blog') }} >
                    <div className="svgWraper d-flex">
                        <img src="./images/icons8-blog-21.svg" alt="suitcase" className={`img-fluid svgicon  ${navTabIndex === 4 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 4 ? (
                            <span className="navTabSpan bricolage-bold ms-2">Blog</span>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Bottomnav