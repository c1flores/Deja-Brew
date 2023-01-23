import React from 'react';
import './footer.css'
// import Auth from '../../utils/auth';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTumblr } from 'react-icons/fa';

function Footer() {
    return (
    <footer>
           <a href='#' className='footer_logo'>☕</a>

           {/* <ul className='permalinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">signup</Link></li>
    </ul> */}

           <div className='footer__socials'>
                <a href='https://instagram.com'><AiFillInstagram /></a>
                <a href='https://facebook.com'><BsFacebook /></a>
                <a href='https://www.tumblr.com'><FaTumblr /></a>
           </div>

           <div className='footer__copyright'>
               <small>&copy; Deja Brew</small>
           </div>

    </footer>
    )
}

export default Footer;
