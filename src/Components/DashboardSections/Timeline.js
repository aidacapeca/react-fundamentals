import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <section className="content">
                {/* row */}
                <div className="row">
                    <div className="col-md-12">
                        {/* The time line */}
                        <ul className="timeline">
                            {/* timeline time label */}
                            <li className="time-label">
                                <span className="bg-orange">
                                    March 2019 - actually
          </span>
                            </li>
                            {/* /.timeline-label */}
                            {/* timeline item */}
                            <li>
                                <i className="fa fa-envelope bg-blue" />
                                <div className="timeline-item">
                                    <h3 className="timeline-header"><a href="#">Tecnosoftware</a> FrontEnd Web Developer</h3>
                                    <div className="timeline-body">
                                        Web development on the home banking application for individuals customers, of new funcionalities, microsites and fixes of
    issues. Such as the complete circuit of eCheqs, several modules
    belonging to the A2D (analogical to digital) project, among
    others
            </div>

                                </div>
                            </li>
                            <li className="time-label">
                                <span className="bg-orange">
                                    April 2018- March 2019
          </span>
                            </li>
                            {/* /.timeline-label */}
                            {/* timeline item */}
                            <li>
                                <i className="fa fa-wordpress bg-purple" />
                                <div className="timeline-item">
                                    <h3 className="timeline-header"><a href="#">Superagencia</a> Project Manager / Web developer</h3>
                                    <div className="timeline-body">
                                        Planification, development and maintenance of several websites
    using Wordpress as CMS platform.
    Leading role, planification, monitoring and organization of
    websites projects working with remote teams.
            </div>

                                </div>
                            </li>
                            <li className="time-label">
                                <span className="bg-orange">
                                    October 2017 - January 2018
          </span>
                            </li>
                            <li>
                                <i className="fa fa-list-alt bg-blue" />
                                <div className="timeline-item">
                                    <h3 className="timeline-header"><a href="#">Tentation S.A</a>  Web Developer / Community Manager
</h3>
                                    <div className="timeline-body">
                                        Administration and design of ads campaigns on social media
    and emails using Google Anaylitics and Mailchimp. Mainteinance of the company web site
            </div>

                                </div>
                            </li>
                            <li className="time-label">
                                <span className="bg-orange">
                                    October 2015 - September 2017
          </span>
                            </li>
                            <li>
                                <i className="fa fa-camera bg-purple" />
                                <div className="timeline-item">
                                    <h3 className="timeline-header"><a href="#">Creativoz Venezuela</a>  FrontEnd Web Developer
</h3>
                                    <div className="timeline-body">
                                        ADesign, development and maintenance on the agency’s website.
Content creation for the website and social medias.
            </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}
