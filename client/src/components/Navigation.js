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

    
}