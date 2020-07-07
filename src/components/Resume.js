import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let propsResumeData = this.props.propsResumeData;
        return (
            <section id="resume">
                {/* Education
            ----------------------------------------------- */}
                <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {propsResumeData.education.map((edu, index) => {
                        return <div className="row item">
                        <div className="twelve columns">
                            <h3>{edu.where}</h3>
                            <p className="info">{edu.what} <span>•</span> <em className="date">{edu.when}</em></p>
                            <p>{edu.notes}</p>
                        </div>
                        </div>
                    })}
                </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
            ----------------------------------------------- */}
                <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {propsResumeData.organizationExperience.map((org, index) => {
                        return <div className="row item">
                        <div className="twelve columns">
                            <h3>{org.where}</h3>
                            <p className="info">{org.what} <span>•</span> <em className="date">{org.when}</em></p>
                            <p>{org.notes}</p>
                        </div>
                        </div>
                    })}
                </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
            ----------------------------------------------- */}
                <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="bars">
                    <ul className="skills">
                        <li><span className="bar-expand html" /><em>HTML 5</em></li>
                        <li><span className="bar-expand css" /><em>CSS</em></li>
                        <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                        <li><span className="bar-expand android" /><em>Android</em></li>
                        <li><span className="bar-expand ionicangular" /><em>Ionic Angular</em></li>
                        <li><span className="bar-expand reactjs" /><em>React JS</em></li>
                        <li><span className="bar-expand python" /><em>Python</em></li>
                    </ul>
                    </div>{/* end skill-bars */}
                </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>
        )
    }
}