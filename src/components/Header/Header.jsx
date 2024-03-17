import React from 'react';
import './Header.css';
import logo from './k_bw_logo.png';

const Header = () => {
    return (
    <header class="mosaic">
    <nav class="navbar px-5">
        <a class="navbar-brand" href="/" title="Home">
        <img class="brand-icon" alt="Kyle O'Brien logo" src={logo} height="30px" width="30px"></img>
        </a>
        <ul class="navbar-nav main-navigation-list">
        <li class="nav-item">
            <a class="nav-link" href="/#work" title="Work">Work</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/vitae.html" title="Work">Vitae</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact" title="Contact">Contact</a>
        </li>
        </ul>
    </nav>
    </header>
    )
}
 export default Header;