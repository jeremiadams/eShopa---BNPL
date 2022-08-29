import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

import './App.scss'
import Navbar from './Navbar'
import Header from './Header'
import Categories from './Categories'
import Footer from './Footer'
import Apparel from '../pages/Apparel'
import Shoes from '../pages/Shoes'
import Jewelry from '../pages/Jewelry'
import Cosmetics from '../pages/Cosmetics'
import ApparelProductDetail from '../components/ApparelProductDetail'
import ShoesProductDetail from '../components/ShoesProductDetail'
import JewelryProductDetail from '../components/JewelryProductDetail'
import CosmeticsProductDetail from '../components/CosmeticsProductDetail'

function App() {

    return (
        <main>
            <Navbar />
            
            <Routes>
                <Route  
                    path="/" 
                    element={
                        <>
                            <Header />
                            <Categories />
                        </>
                    }
                />
                <Route  
                    path="/categories/apparel" 
                    element={
                        <>
                            <Apparel />
                        </>
                    }
                />

                <Route  
                    path="/categories/apparel/:apparelId" 
                    element={
                        <>
                            <ApparelProductDetail />
                        </>
                    }
                />
                    
                <Route 
                    path="/categories/shoes"
                    element={
                        <>
                            <Shoes />
                        </>
                    } 
                />

                <Route  
                    path="/categories/shoes/:shoesId" 
                    element={
                        <>
                            <ShoesProductDetail />
                        </>
                    }
                />

                <Route 
                    path="/categories/jewelry"
                    element={
                        <>
                            <Jewelry />
                        </>
                    }

                />

                <Route 
                    path="/categories/jewelry/:jewelryId"
                    element={
                        <>
                            <JewelryProductDetail />
                        </>
                    }

                />

                <Route 
                    path="/categories/cosmetics"
                    element={
                        <>
                            <Cosmetics />
                        </>
                    } 
                />

                <Route 
                    path="/categories/cosmetics/:cosmeticsId"
                    element={
                        <>
                            <CosmeticsProductDetail />
                        </>
                    } 
                />
            </Routes>

            <Footer />
        </main>
    )
}

export default App