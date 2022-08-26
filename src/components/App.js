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
                    path="/categories/shoes"
                    element={
                        <>
                            <Shoes />
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
                <Route path="/categories/cosmetics" />
            </Routes>

            <Footer />
        </main>
    )
}

export default App