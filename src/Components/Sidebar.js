import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import AboutMe from './SidebarSections/AboutMe';

export default class Sidebar extends Component {
    render() {
        return (
            <AboutMe />
        )
    }
}
//ReactDOM.render(<AboutMe />, document.getElementById('about-me'));