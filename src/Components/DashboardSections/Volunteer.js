import React, { Component } from 'react'

export default class Volunteer extends Component {
    render() {
        return (
            <div>
                <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#tab_1" data-toggle="tab">Rotaract Cacique Baruta Venezuela </a></li>
                        <li><a href="#tab_2" data-toggle="tab">Techo </a></li>
                        <li><a href="#tab_3" data-toggle="tab">Santa Cruz del Este School </a></li>
                        <li><a href="#tab_4" data-toggle="tab"> Student Board in Computer Engineer</a></li>
                        <li><a href="#tab_4" data-toggle="tab"> ONG Somos Posibles</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab_1">

                            <p>Rotaract clubs bring together people ages 18-30 to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service. In communities worldwide, Rotary and Rotaract members work side by side to take action through service.</p>
                            <p> I could participate as  Community Director during 2017</p>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="tab_2">
                            <p>TECHO, also known as Un Techo para mi País (UTPMP) (Spanish for A Roof For My Country), is a nonprofit organization that mobilizes youth volunteers to fight extreme poverty in Latin America, by constructing transitional housing and implementing social inclusion programs. It was founded by a Jesuit priest, and working with more than 720,000 volunteers, it has constructed houses for over 102,400 families in 19 countries in Latin American and the Caribbean and 2 offices located in Miami, FL, USA and London, England that work as funds hubs.</p>
                            <p> I could participate as General Secretary from 2017 to 2018, and coordinate several activities destinated to kids in hospitals and orphans.</p>

                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="tab_3">
                            <p>Santa Cruz del Este is a school in Baruta, Venezuela in a community with low recurses. In this school the teachers have a garden where they plants a lot of vegetables in order to give them to the children in the school and to the community. </p>
                            <p>During 2015 to 2017 I participate in a recycle project using this garden space.</p>
                        </div>
                        <div className="tab-pane" id="tab_4">
                            <p>I was member of the directive board in my career in the university as Cultural Coordinator and General Secretary during 2015 to 2017 </p>
                        </div>
                        <div className="tab-pane" id="tab_5">
                            <p>Somos Posible is an ONG in Venezuela that dedicated the volunteers efford to give to community with low recurses courses, capacitations, cleaning and remodeling the houses. </p>
                            <p>With this wonderfull ONG I was a Community Coordinator during 2014 to 2017</p>
                        </div>
                        {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                </div>



                <div className="box-body">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to={1} className />
                            <li data-target="#carousel-example-generic" data-slide-to={2} className />
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="../../dist/img/volunteer/01.png" alt="First slide" />
                            </div>
                            <div className="item">
                                <img src="../../dist/img/volunteer/02.PNG" alt="Second slide" />

                            </div>
                            <div className="item">
                                <img src="../../dist/img/volunteer/03.PNG" alt="Third slide" />

                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="fa fa-angle-left" />
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="fa fa-angle-right" />
                        </a>
                    </div>
                </div>








































            </div>
        )
    }
}
