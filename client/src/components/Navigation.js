import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/pages.css';

function Navigation({ currentPage, handlePageChange }) {
    const hide = {
        '@midea (maxWidth: 768px)': {
            display: 'none',
        },
    };

    const show = {
        '@media (maxWidth: 768px)': {
            display: 'block',
            margin: 0,
            padding: 0,
            color: 'white', 
        },
    };

    return (
        <>
            <Navbar variant='dark' className='nav-items' style={hide} id='nav-full'>
                <Container className='nav-item'>
                    <Navbar.Brand href='#about' onClick={() => handlePageChange('Home')}
                    className={currentPage === 'About' ? 'nav-link active' : "nav-link"}>Deja-Brew</Navbar.Brand>
                    <nav className='nav-items'>
                        <Nav.Link href="#home" onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav=link active' : 'nav-link'}>Home</Nav.Link>
                        <Nav.Link href="#home" onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav=link active' : 'nav-link'}>Home</Nav.Link>
                         
                    </nav>
                </Container>
            </Navbar>
        </>
    )
}