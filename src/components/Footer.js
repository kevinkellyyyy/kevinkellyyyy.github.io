import React, { Component } from 'react';
export default class Footer extends Component{
    render() {
        return (
            <footer>
                <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://id.linkedin.com/in/kevin-isyanta-b5962117b"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/kevinkellyyyy"><i className="fa fa-github" /></a></li>
                        <li><a href="https://www.instagram.com/kevinkellyyyy"><i className="fa fa-instagram" /></a></li>
                        <li><a href="https://wa.me/082297017693"><i className="fa fa-whatsapp" /></a></li>
                        <li><a href="https://steamcommunity.com/id/zhypr"><i className="fa fa-steam" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2020 Kevin Kelly Isyanta</li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        )
    }
}