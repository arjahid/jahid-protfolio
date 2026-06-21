import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const layout = () => {
    return (
        <div className="page-frame relative min-h-screen flex flex-col">
            <Navbar />
            <main className="relative z-10 flex-1">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default layout;