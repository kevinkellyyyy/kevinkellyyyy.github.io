import React, { Component } from 'react'
export default class Portfolio extends Component {
    render() {
        let propsPortfolioData = this.props.propsPortfolioData;
        return (
            <section id="portfolio">
                <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-01" title>
                                <img alt="" src="images/kellnewsf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Kell's News</h5>
                                    <p>News Getter App</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-02" title>
                                <img alt="" src="images/kellbookf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Kell's Books</h5>
                                    <p>Browse Books Info and Save it</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-03" title>
                                <img alt="" src="images/sentimenanf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Sentiment Analysis in Ecommerce Platform</h5>
                                    <p>My Thesis Project</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-04" title>
                                <img alt="" src="images/potretbudayaf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Ragam Budaya</h5>
                                    <p>Last and my Best Group Project</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-05" title>
                                <img alt="" src="images/kellnewsdicf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Kell's News - Dicoding</h5>
                                    <p>Fundamental Front-end Development Dicoding Test</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                            <a href="#modal-06" title>
                                <img alt="" src="images/cobacrudf.jpg" />
                                <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Simple React Todo List</h5>
                                    <p>A bit refresh for my reactjs basic knowledge</p>
                                </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                            </div>
                        </div> {/* item end */}
                    </div> {/* portfolio-wrapper end */}
                </div> {/* twelve columns end */}
                {/* Modal Popup
                            --------------------------------------------------------------- */}
                <div id="modal-01" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/kellnews.jpg" alt="" />
                    <div className="description-box">
                    <h4>Kell's News</h4>
                    <p>This application is based on java android by using the API from the News API as a source of news that is displayed. There are Indonesian top news headline menu features, a selection of world news portal features, and the desired news search feature. The news we are reading can also be shared by pressing the share button when the news is opened, there is also a notification feature.</p>
                    <span className="categories"><i className="fa fa-tag" />Daily News app - Java Android</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a href="#">Demo</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-01 End */}
                <div id="modal-02" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/kellbook.jpg" alt="" />
                    <div className="description-box">
                    <h4>Kell's Books</h4>
                    <p>This application is a midterm assignment for Mobile Programming 1. Java-based Android courses In this application there is a list of books with an internal database which, if opened, will display the info of the author, publisher and so on and can be saved to favorites. There is a list of favorite books and can delete the book from favorites if it is not wanted.</p>
                    <span className="categories"><i className="fa fa-tag" />static book list app - Java Android</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-02 End */}
                <div id="modal-03" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/sentimenan.jpg" alt="" />
                    <div className="description-box">
                    <h4>Sentiment analysis in Ecommerce Platform</h4>
                    <p>Indonesia is one from many countries in the world which has the highest growth of e-commerce platforms. By the mean of dynamic website technology, through their social media accounts, digital society often express their opinion on e-commerce platforms. Oftentimes, in a large scale, capital leading e-commerce companies try to evaluate sentiment polarity of their new promotion or sale strategy through such data. However, as copious amount of opinions from e-commerce’s various social media accounts, the manual labelling process might devour large amount of resources and prone to human errors. For tackling such problem, previous researches show a promising result by encoding such problem into machine learning classification task. Henceforth, in this research, we try to utilize multilayer perceptron (MLP), as one of machine learning classification algorithm, for tackling such problem and analyze the performance of it. In this research, we also present the effect of a comparatively new word embedding model, fastText and a well-known term frequency – inverse document frequency (TF–IDF) as a feature extraction method for MLP method. Our experiment shows that the developed MLP model able to achieves an accuracy score of 89.24% and F1-score of 89%.</p>
                    <span className="categories"><i className="fa fa-tag" />Thesis Project - Python, Google Collab, MLP, FastText, Flask</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-03 End */}
                <div id="modal-04" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/potretbudaya.jpg" alt="" />
                    <div className="description-box">
                    <h4>Ragam Budaya</h4>
                    <p>In this modern era, Indonesian culture has begun to be forgotten little by little without realizing it, not a few of the Indonesian people themselves do not know about general knowledge about the culture of their country, especially among young people or millennials. Therefore, the purpose of making the application \"Ragam Budaya\" is one of them to reintroduce Indonesia's wealth. There are several features including Indonesian infographics, interactive quizzes with scores of users, and cultural portraits, with picture frames that can be changed and can be shared on all social media platforms.</p>
                    <span className="categories"><i className="fa fa-tag" />Education App - Ionic Angular</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-04 End */}
                <div id="modal-05" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/kellnewsdic.jpg" alt="" />
                    <div className="description-box">
                    <h4>"Kell's News - Dicoding</h4>
                    <p>This application is the same as I have done before using java android. but here I change it to the standard ES6 programming form, with webpack and babel loader. I made it again because at that time the test given was quite simple, and it uses an API, so I remembered my old assignment as the theme.</p>
                    <span className="categories"><i className="fa fa-tag" />Dicoding Academy</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-05 End */}
                <div id="modal-06" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/cobacrud.jpg" alt="" />
                    <div className="description-box">
                    <h4>Simple React Todo List</h4>
                    <p>trying to refresh what used to be done during the internship, although not everything, but only really basic, \"to-do-list\" CRUD is very simple, even without decorating, because I want to refresh the basis of React Js. how to use simple functions and state management. But in the future I will develop it again and tidy it up by decorating it in such a way.</p>
                    <span className="categories"><i className="fa fa-tag" />refresh basic knowledge</span>
                    </div>
                    <div className="link-box">
                    <a href="#">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-06 End */}
                <h1>My Other Works</h1>
                </div> {/* row End */}
            </section>
        )
    }
}