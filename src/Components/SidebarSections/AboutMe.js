import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="box box-primary">
                <div className="box-body box-profile">
                    <img className="profile-user-img img-responsive img-circle" src="../../dist/img/aidaperez.png" alt="User profile picture" />
                    <h3 className="profile-username text-center">Aida del Carmen Perez Campos</h3>
                    <p className="text-muted text-center">Software Developer</p>
                    <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                            <i class="fa fa-home margin-r-5"></i>Born in Caracas, Venezuela
                        </li>
                        <li className="list-group-item">
                            <i class="fa fa-calendar-o margin-r-5"></i> On June 07, 1995
                        </li>
                        <li className="list-group-item">
                            <i class="fa fa-map-pin margin-r-5"></i>Living in Buenos Aires, Argentina
                        </li>
                        <li className="list-group-item">
                            <i class="fa fa-envelope-o margin-r-5"></i>Always answer using aida.capeca@gmail.com
                        </li>
                        <li className="list-group-item">
                            <i class="fa fa-pencil margin-r-5"></i> Skills

                        <p>
                                <span class="label label-danger">UI Design</span>
                                <span class="label label-success">Coding</span>
                                <span class="label label-info">Javascript</span>
                                <span class="label label-warning">PHP</span>
                                <span class="label label-primary">Node.js</span>
                            </p>
                        </li>
                    </ul>
                </div>
                {/* /.box-body */}
            </div >
        )
    }
}
