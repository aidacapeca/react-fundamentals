import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Volunteer from './DashboardSections/Volunteer';
import TimeLine from './DashboardSections/Timeline';
import Dashboard from './Dashboard';


export default class Breadcrumbs extends Component {
    volunteerDashboard() {
        ReactDOM.render(<Volunteer />, document.getElementById('dashboard'));
    }
    profesionalTimeline() {
        ReactDOM.render(<TimeLine />, document.getElementById('dashboard'));
    }
    dashboard() {
        ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
    }
    render() {
        return (
            <div class="btn-group">
                <button onClick={this.dashboard} type="button" class="btn btn-info">Dashboard</button>
                <button onClick={this.aboutMe} type="button" class="btn btn-info">About Me</button>
                <button onClick={this.educationHistory} type="button" class="btn btn-info">Education</button>
                <button onClick={this.profesionalTimeline} type="button" class="btn btn-info">Profesional Experience</button>
                <button onClick={this.volunteerDashboard} type="button" class="btn btn-info">Volunteer</button>
            </div>
        )
    }
}
