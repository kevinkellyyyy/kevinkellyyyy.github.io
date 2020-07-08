import React, { Component } from 'react';
export default class Favquotes extends Component {
    render() {
        return(
            <section id="favquotes">
                <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                    <h1><span>Client favquotes</span></h1>
                    </div>
                    <div className="ten columns flex-container">
                    <div className="flexslider">
                        <ul className="slides">
                            <li>
                                <blockquote>
                                <p>“Life isn’t about finding yourself.<br/>
                                    Life is about creating yourself.”
                                </p>
                                <cite>George Bernard Shaw.</cite>
                                </blockquote>
                            </li> {/* slide ends */}
                            <li>
                                <blockquote>
                                <p>“Obstacles don’t have to stop you. If you run into a wall, <br/>
                                    don’t turn around and give up. Figure out how to climb it, <br/>
                                    go through it, or work around it.”
                                </p>
                                <cite>Michael Jorjan</cite>
                                </blockquote>
                            </li> {/* slide ends */}
                        </ul>
                    </div> {/* div.flexslider ends */}
                    </div> {/* div.flex-container ends */}
                </div> {/* row ends */}
                </div>  {/* text-container ends */}
            </section>
        )
    }
}