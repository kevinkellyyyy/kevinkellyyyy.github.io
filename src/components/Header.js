import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> 
                </nav> 
                <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Kevin Kelly Isyanta.</h1>
                    <h3>"Life <span>isn't about </span>how to <span>find ourselves, <br/></span>but how <span>to create </span>what we <span>really are" 😇</span></h3>
                    <h3>Let's <a className="smoothscroll" href="#about">start scrolling </a>
                    and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <ul className="social">
                    <li><a href="https://id.linkedin.com/in/kevin-isyanta-b5962117b"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/kevinkellyyyy"><i className="fa fa-github" /></a></li>
                    <li><a href="https://www.instagram.com/kevinkellyyyy"><i className="fa fa-instagram" /></a></li>
                    <li><a href="https://wa.me/082297017693"><i className="fa fa-whatsapp" /></a></li>
                    <li><a href="https://steamcommunity.com/id/zhypr"><i className="fa fa-steam" /></a></li>
                    </ul>
                </div>
                </div>
                <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        )
    }
}