import React from 'react';
import Navbar from '../components/Navbar';
import Offbar from '../components/OfferBar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Category from '../components/Category';
import Footer from '../components/Footer';
function Home() {

    return(
        <>
        <Navbar />
        <Offbar />
        <Hero />
        <Feature />
        <Category />
        <Footer />
        </>
       
        
    )
}

export default Home;