import React from 'react'

import './Categories.scss'

import ApparelImg from '../images/apparel-img.png'
import ShoesImg from '../images/shoes-img.png'
import JewelryImg from '../images/jewelry-img.png'
import FurnitureImg from '../images/furniture-img.png' 

function Categories() {

    return (
        <section className="categories">
            <div className="categories__heading-box">
                <h1 className="categories__heading">Categories</h1>
            </div>
            <div className="categories__box">
                <div className="categories__category categories__category-apparel">
                    <img className="categories__category-img" src={ApparelImg} alt="Image of Apparel"/>
                    <h3 className="categories__category-heading">Apparel</h3>
                    <p className="categories__category-text">Popular</p>
                </div>
                <div className="categories__category categories__category-shoes">
                    <img className="categories__category-img" src={ShoesImg} alt="Image of Apparel"/>
                    <h3 className="categories__category-heading">Shoes</h3>
                    <p className="categories__category-text">Women's wear</p>
                </div>
                <div className="categories__category categories__category-jewelry">
                    <img className="categories__category-img" src={JewelryImg} alt="Image of Apparel"/>
                    <h3 className="categories__category-heading">Jewelry</h3>
                    <p className="categories__category-text">Popular</p>
                </div>
                <div className="categories__category categories__category-furniture">
                    <img className="categories__category-img" src={FurnitureImg} alt="Image of Apparel"/>
                    <h3 className="categories__category-heading">Furniture</h3>
                    <p className="categories__category-text">Popular</p>
                </div>
            </div>
        </section>
    )
}

export default Categories