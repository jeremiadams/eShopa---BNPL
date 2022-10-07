import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


import './Navbar.scss'
import {Context} from '../Context'
import Logo from '../images/eshopa-logo.png'

function Header() {
    const [boxShadow, setBoxShadow] = useState(false)
    const {cartItems, likedItems, loanPoints} = useContext(Context)

    React.useEffect(function() {
        const onScroll = () => {
          setBoxShadow(true)
        }
        window.addEventListener('scroll', onScroll)
    
        // return window.removeEventListener('scroll', onScroll)
    }, [])

    const navbarStyles = boxShadow ? {
        backgroundColor: 'rgba(255, 255, 255, 0.4)' ,
        boxShadow: '0 .1rem 1.5rem 0 rgb(2 2 3 / 10%)',
        transition: 'boxShadow .4s'
      } : {}


    const popover = (
    <Popover className="popover" id="popover-basic">
        <Popover.Header className="popover__header" as="h3">Loan Points</Popover.Header>
        <Popover.Body className="popover__body">
        And here's some <strong>amazing</strong> content. It's very engaging.
        right? content. It's very engaging.
        </Popover.Body>
    </Popover>
    );


    

    return (
        <nav className="nav" style={navbarStyles}>
            <Link to="/">
                <div className="logo__box">
                    <img className="logo" src={Logo} />
                </div>
            </Link>
            <div className="cart__favorite-box">

                {/* <div className="loan__points-box">
                    <h3 className="loan__points">$ {loanPoints.toFixed(2)}</h3>
                </div> */}
                <OverlayTrigger className="loan__points-box" trigger="click"  placement="bottom-start" overlay={popover}>
                    <Button className="loan__points" variant="success">$ {loanPoints.toFixed(2)}</Button>
                </OverlayTrigger>

                <Link to="/likes">
                    <div className="favorite__box">
                    {likedItems.length <= 0 ? <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4242 2.50903C12.555 -0.95764 6.60491 -0.831996 2.88624 2.88627C-0.962081 6.73488 -0.962081 12.9745 2.88624 16.8226L14.1014 28.0378C15.3841 29.3207 17.4639 29.3207 18.7465 28.0378L29.9616 16.8226C33.8102 12.9743 33.8102 6.73516 29.9616 2.88627C26.2434 -0.831967 20.293 -0.957612 16.4237 2.50903H16.4242ZM14.5001 5.20909L15.2628 5.97183C15.9043 6.61331 16.9442 6.61331 17.5856 5.97183L18.3484 5.20909C20.914 2.64347 25.0736 2.64347 27.6391 5.20909C30.2047 7.77471 30.2047 11.9343 27.6391 14.4998L16.4239 25.7149L5.20881 14.4998C2.64319 11.9342 2.64319 7.77457 5.20881 5.20909C7.77415 2.64347 11.934 2.64347 14.4995 5.20909H14.5001Z" fill="black"/>
                        </svg> :
                        <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6433 3.51281C18.2577 2.55187 19.6797 1.43733 21.2943 0.745315C26.176 -1.36881 31.7878 1.20648 33.2484 6.04975C34.2093 9.20175 33.6329 12.1229 31.8646 14.8519C30.4039 17.1583 28.2901 18.8493 26.4065 20.7328C23.7543 23.3081 21.1021 25.845 18.45 28.4203C17.3354 29.4966 16.3745 29.4966 15.2597 28.4203C11.5312 24.8071 7.80281 21.2325 4.11282 17.6194C2.07564 15.6592 0.499636 13.3912 0.115468 10.5085C-0.614912 5.281 2.11428 0.476322 8.45639 0.0535103C11.4161 -0.138732 13.7992 1.12976 16.0286 2.89795C16.2591 3.16714 16.5281 3.39772 16.6433 3.51301L16.6433 3.51281Z" fill="black"/>
                        </svg>}
                    </div>
                </Link>

                <Link to="/cart">
                    <div className="cart__box">
                        {cartItems.length <= 0 ? <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6508 23.3004C9.8969 23.3004 8.47348 24.7238 8.47348 26.4777C8.47348 28.2315 9.8969 29.655 11.6508 29.655C13.4046 29.655 14.828 28.2315 14.828 26.4777C14.828 24.7238 13.4046 23.3004 11.6508 23.3004ZM22.2417 23.3004C20.4878 23.3004 19.0644 24.7238 19.0644 26.4777C19.0644 28.2315 20.4878 29.655 22.2417 29.655C23.9956 29.655 25.419 28.2315 25.419 26.4777C25.419 24.7238 23.9956 23.3004 22.2417 23.3004ZM11.6508 25.4186C12.2354 25.4186 12.7099 25.8931 12.7099 26.4777C12.7099 27.0623 12.2354 27.5368 11.6508 27.5368C11.0661 27.5368 10.5917 27.0623 10.5917 26.4777C10.5917 25.8931 11.0661 25.4186 11.6508 25.4186ZM22.2417 25.4186C22.8263 25.4186 23.3008 25.8931 23.3008 26.4777C23.3008 27.0623 22.8263 27.5368 22.2417 27.5368C21.6571 27.5368 21.1826 27.0623 21.1826 26.4777C21.1826 25.8931 21.6571 25.4186 22.2417 25.4186ZM3.22341 4.54357L6.38888 16.1543L7.04443 18.7755C7.39833 20.1894 8.66926 21.1819 10.1276 21.1819H25.4185C26.0031 21.1819 26.4776 20.7074 26.4776 20.1228C26.4776 19.5381 26.0031 19.0637 25.4185 19.0637H10.1276C9.64132 19.0637 9.21769 18.7332 9.09926 18.262L8.77089 16.9455H23.8003C25.2332 16.9455 26.4892 15.9871 26.8662 14.6039L28.888 7.19027C29.1487 6.23497 28.9485 5.21298 28.348 4.42598C27.7464 3.63898 26.8133 3.17728 25.823 3.17728H4.99998L4.42386 1.4489C4.13474 0.583409 3.32555 0 2.4137 0H1.05909C0.474462 0 0 0.474461 0 1.05909C0 1.64372 0.474462 2.11819 1.05909 2.11819H2.4137L3.22341 4.54357ZM26.8442 6.63313L24.8225 14.0468C24.6974 14.5075 24.278 14.8274 23.8005 14.8274H8.22336L5.62313 5.29553H25.8222C26.1526 5.29553 26.464 5.44919 26.664 5.71183C26.8642 5.97448 26.9309 6.31443 26.8441 6.63312L26.8442 6.63313Z" fill="white"/>
                        </svg> :
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6508 23.3004C9.8969 23.3004 8.47348 24.7238 8.47348 26.4777C8.47348 28.2315 9.8969 29.655 11.6508 29.655C13.4046 29.655 14.828 28.2315 14.828 26.4777C14.828 24.7238 13.4046 23.3004 11.6508 23.3004ZM22.2417 23.3004C20.4878 23.3004 19.0644 24.7238 19.0644 26.4777C19.0644 28.2315 20.4878 29.655 22.2417 29.655C23.9956 29.655 25.419 28.2315 25.419 26.4777C25.419 24.7238 23.9956 23.3004 22.2417 23.3004ZM3.22341 4.54357L6.38888 16.1543L7.04443 18.7755C7.39833 20.1894 8.66926 21.1819 10.1276 21.1819H25.4185C26.0031 21.1819 26.4776 20.7074 26.4776 20.1228C26.4776 19.5381 26.0031 19.0637 25.4185 19.0637H10.1276C9.64132 19.0637 9.21769 18.7332 9.09926 18.262L8.77089 16.9455H23.8003C25.2332 16.9455 26.4892 15.9871 26.8662 14.6039L28.888 7.19027C29.1487 6.23497 28.9485 5.21298 28.348 4.42598C27.7464 3.63898 26.8133 3.17728 25.823 3.17728H4.99998L4.42386 1.4489C4.13474 0.583409 3.32555 0 2.4137 0H1.05909C0.474462 0 0 0.474462 0 1.05909C0 1.64372 0.474462 2.11819 1.05909 2.11819H2.4137L3.22341 4.54357Z" fill="white"/>
                        </svg>}
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header