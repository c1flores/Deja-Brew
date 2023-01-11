import React, { useState } from "react"
import Navigation from './Navigation'
import About from './pages/About';
import Drinks from './pages/Drinks';
import Home from './pages/Home'

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if ( currentPage === 'Drinks') {
            return <Drinks />
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div className="nav-container">
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        </div>
    )
}