import React from 'react';
import './Footer.css';
import logo from './k_bw_logo.png';

const Footer = () => {
    return (
<div>
    <div class="bg-dark text-light px-4 py-5">
        <div id="contact" class="py-5">
            <h1 class="display-5 fw-bold text-white text-center">Get in Touch <i class="fa-solid fa-paper-plane" aria-hidden="true"></i></h1>
            <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">Want to start a project? Need consulting? Want to talk about dough fermentation? Let me know!</p>
                <form class="form-inline" id="fs-frm" name="contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqvpywj" method="post">
                <fieldset id="fs-frm-inputs">
                    <div class="form-group m-3">
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" id="name" required=""></input>
                    </div>
                    <div class="form-group m-3">
                    <label for="email">Email Address</label>
                    <input class="form-control" type="email" name="_replyto" id="email" required=""></input>
                    </div>
                    <div class="form-group m-3">
                    <label for="telephone">Phone Number (Optional)</label>
                    <input class="form-control" type="telephone" name="telephone" id="telephone"></input>
                    </div>
                    <div class="form-group m-3">
                    <label for="message">How can I help?</label>
                    <textarea class="form-control" rows="6" name="message" id="message" required=""></textarea>
                    </div>
                    <input type="hidden" name="_subject" id="email-subject" value="Portfolio Contact Submission"></input>
                </fieldset>
                <button class="btn btn-outline-light" type="submit" value="Get in Touch!">
                    <i class="fa-solid fa-paper-plane"></i>
                    Get in Touch!
                </button>
            </form>
            {/*<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

                <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
            </div>*/}
            </div>
        </div>
        </div>
    <footer class="main-footer mosaic px-5">
    <nav class="navbar">
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
        <a class="navbar-brand" href="/" title="Home">
        <img class="brand-icon" alt="Kyle O'Brien logo" src={logo} height="30px" width="30px"></img>
        </a>
    </nav>
    </footer>
</div>
    )
}

export default Footer;