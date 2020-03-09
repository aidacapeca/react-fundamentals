import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <h2>University</h2>
                <div className="box-header">
                    <h3 className="box-title">Since 2012 to 2017 I studied Computer Engineering at the Simon Bolivar University.</h3>
                </div>
                <h2>High school</h2>
                <div className="box-header">
                    <h3 className="box-title">Since 2007 to 2012 I studied at the Jesus Obrero Technical School where I graduated in Administration Degree. Specialized: Data Processing.</h3>
                </div>
                <h2>Aditional courses</h2>
                <div className="box-header">
                    <h3 className="box-title">I've been practicing and learning new programming languages and frameworks to complement my studies in different digital platforms such as PluralSight, Coursera, Udemy among others.</h3>
                </div>
            </div>
        )
    }
}
