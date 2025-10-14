import React from 'react';
import Hero from './Hero';
import About from './About';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="pt-5"> {/* spacing to account for fixed navbar */}
        <Navbar></Navbar>
            <Hero />
            <ProfileSection></ProfileSection>
            <About />
            <Footer></Footer>
        </div>
    );
};

export default Home;