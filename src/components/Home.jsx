import React from 'react';
import Hero from './Hero';
import About from './About';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProfileSection></ProfileSection>
            <About />
            <Footer></Footer>
        </div>
    );
};

export default Home;