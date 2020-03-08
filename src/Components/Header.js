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
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu">
                                            <li>{/* start message */}
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="dist/img/acapeca-avatar.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                      <small><i className="fa fa-clock-o" /> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
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
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                  </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                                                    page and may cause design problems
                  </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-red" /> 5 new members joined
                  </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                  </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-red" /> You changed your username
                  </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#">View all</a></li>
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
