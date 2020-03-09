import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                {/* Logo */}
                <a href="" className="logo">
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>Profesional</b>Profiles</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {/* Messages: style can be found in dropdown.less*/}
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o" />
                                    <span className="label label-success">1</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 1 new message</li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu">
                                            <li>{/* start message */}
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="dist/img/user6-128x128.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        ProfesionalProfiles
                      <small><i className="fa fa-clock-o" /> 5 mins</small>
                                                    </h4>
                                                    <p>Have you tried our app?</p>
                                                </a>
                                            </li>



                                        </ul>
                                    </li>
                                    {/*<li className="footer"><a href="#">See All Messages</a></li>*/}
                                </ul>
                            </li>
                            {/* Notifications: style can be found in dropdown.less */}
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o" />
                                    <span className="label label-warning">1</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 1 notifications</li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua" /> Manuel has accepted your friend request
                  </a>
                                            </li>
                
                    
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Tasks: style can be found in dropdown.less */}

                            {/* User Account: style can be found in dropdown.less */}
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/acapeca-avatar.png" className="user-image" alt="User Image" />
                                    <span className="hidden-xs">Aida Perez</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* User image */}
                                    <li className="user-header">
                                        <img src="dist/img/acapeca-avatar.png" className="img-circle" alt="User Image" />
                                        <p>
                                            Aida Perez - Software Develepor
                <small>Member since December 2019</small>
                                        </p>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}
