import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Hello... my name is Kevin Kelly Isyanta. I am a student in the final semester majoring in informatics at Universitas Multimedia Nusantara 
                        class of 2016.  At first I wanted to enter the department because I liked technology, especially the internet. I used to think, 
                        "how come the internet is really sophisticated, anything can be searched and utilized", "wow... even though the web design is simple but the 
                        information delivered is very clear". That's what makes me curious to learn it especially web programming. I've tried codeigniter, php, 
                        and React JS before. I like learning new things, although usually I often take time, but with the intention and focus I can definitely achieve it.
                    </p>
                    <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                        <span>Kevin Kelly Isyanta</span><br />
                        <span>Kp. Sempur Rt. 02/06 No.1<br />
                            Kadu, Curug, Kab. Tangerang, Banten
                        </span><br />
                        <span>0822-9702-7693</span><br />
                        <span>kellyisyanta@gmail.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                    </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
                </div>
            </section>
        )
    }
}