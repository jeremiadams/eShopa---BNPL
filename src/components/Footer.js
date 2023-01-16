import React from 'react'

import './Footer.scss'
import FooterLogo from '../images/footer-logo.png'

function Footer() {

    // const [hover, setHover] = useState(false)

    // function mouseEnter() {
    //     setHover(true)
    // }

    // function mouseLeave() {
    //     setHover(false)
    // }

    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__logo-box">
                    <img alt="e-Shopa Footer Logo" className="footer__logo" src={FooterLogo}/>
                </div>
                <div className="footer__contact">
                        <a href="https://www.instagram.com/jeremiadams"><svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#fff"/>
                            <path d="M31.6809 19C24.6869 19 19 24.6869 19 31.6809V49.2391C19 56.2331 24.6869 61.92 31.6809 61.92H49.2391C56.2331 61.92 61.92 56.2331 61.92 49.2391V31.6809C61.92 24.6869 56.2331 19 49.2391 19H31.6809ZM52.1655 26.8036C53.2385 26.8036 54.1164 27.6815 54.1164 28.7545C54.1164 29.8275 53.2385 30.7055 52.1655 30.7055C51.0925 30.7055 50.2145 29.8275 50.2145 28.7545C50.2145 27.6815 51.0925 26.8036 52.1655 26.8036ZM40.46 29.73C46.381 29.73 51.19 34.539 51.19 40.46C51.19 46.381 46.381 51.19 40.46 51.19C34.539 51.19 29.73 46.381 29.73 40.46C29.73 34.539 34.539 29.73 40.46 29.73ZM40.46 31.6809C35.6217 31.6809 31.6809 35.6217 31.6809 40.46C31.6809 45.2983 35.6217 49.2391 40.46 49.2391C45.2983 49.2391 49.2391 45.2983 49.2391 40.46C49.2391 35.6217 45.2983 31.6809 40.46 31.6809Z" fill="black"/>
                        </svg></a> 
                    

                        <a href="https://www.linkedin.com/in/jeremiadams/"><svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#fff"/>
                            <path d="M24.5983 20C21.3606 20 19.0091 21.9402 19.0091 24.6087C19.0091 27.2866 21.4166 29.3122 24.5983 29.3122C27.8359 29.3122 30.1874 27.3345 30.1874 24.5541C30.0381 21.8762 27.7333 20 24.5983 20ZM19.933 31.1874C19.4199 31.1874 19 31.6073 19 32.1205V59.1787C19 59.6919 19.4199 60.1118 19.933 60.1118H29.2635C29.7767 60.1118 30.1965 59.6919 30.1965 59.1787V32.1205C30.1965 31.6073 29.7767 31.1874 29.2635 31.1874H19.933ZM33.9287 31.1874C33.4155 31.1874 32.9957 31.6073 32.9957 32.1205V59.1787C32.9957 59.6919 33.4155 60.1118 33.9287 60.1118H42.3261C42.8411 60.1118 43.2591 59.6938 43.2591 59.1787V45.1831V44.9498V44.7165C43.2591 42.5052 44.9579 40.704 47.1225 40.5361C47.2345 40.5174 47.3459 40.5178 47.4578 40.5178C47.5698 40.5178 47.6812 40.5174 47.7931 40.5361C49.9578 40.704 51.6565 42.5052 51.6565 44.7165V59.1787C51.6565 59.6938 52.0745 60.1118 52.5896 60.1118H60.987C61.5001 60.1118 61.92 59.6919 61.92 59.1787V43.317C61.92 37.2802 58.6815 31.1874 51.4597 31.1874C48.1754 31.1874 45.6944 32.4566 44.1922 33.5109V32.1205C44.1922 31.6073 43.7723 31.1874 43.2591 31.1874H33.9287Z" fill="black"/>
                        </svg></a> 
                    
                        <a href="https://www.twitter.com/paramountjeremi/"><svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#fff"/>
                            <path d="M61.92 27.1278C60.3378 27.8302 58.6419 28.3019 56.859 28.5159C58.6787 27.4255 60.0769 25.6994 60.7325 23.6456C59.0332 24.6524 57.1433 25.385 55.1396 25.7797C53.534 24.0671 51.246 23 48.7138 23C43.8502 23 39.9064 26.9404 39.9064 31.8041C39.9064 32.4932 39.9867 33.1655 40.1372 33.8111C32.8183 33.4432 26.3323 29.9376 21.9871 24.609C21.2278 25.9135 20.7963 27.4255 20.7963 29.0378C20.7963 32.0918 22.3484 34.7879 24.7133 36.3701C23.2682 36.3232 21.9102 35.9252 20.7227 35.2662C20.7227 35.303 20.7227 35.3398 20.7227 35.3766C20.7227 39.6448 23.76 43.2006 27.784 44.0134C27.0481 44.2141 26.2687 44.3212 25.4659 44.3212C24.8973 44.3212 24.3453 44.2677 23.8068 44.1606C24.9307 47.6562 28.1821 50.2084 32.0322 50.2787C29.0217 52.6403 25.2251 54.0452 21.0973 54.0452C20.3848 54.0452 19.6857 54.005 19 53.9214C22.8936 56.4235 27.5231 57.8786 32.4972 57.8786C48.6938 57.8786 57.5514 44.4617 57.5514 32.8277C57.5514 32.4463 57.5414 32.0617 57.528 31.687C59.2473 30.446 60.7392 28.8939 61.92 27.1278Z" fill="black"/>
                        </svg></a>
                    
                </div>

            </div>
            <p>© eShopa, Inc. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer