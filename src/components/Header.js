import React from 'react'

import './Header.scss'
import HeroImg from '../images/hero-img.png'

function Hero() {

    return (
        <header className="hero">
            <div className="hero__text-box">
                <h1 className="hero__text-primary">Whatever you’ve got in mind, we’ve got inside.</h1>
                <p className="hero__text-secondary">When you buy with eShopa, you always know exactly what you’ll owe and when you’ll be done paying. There are no hidden fees—not even late fees.</p>
                <button className="hero__btn">Shop Now!</button>

            </div>
            <div className="hero__img-box">
                <img className="hero__img" src={HeroImg}/>
            </div>
        </header>
    )
}

export default Hero