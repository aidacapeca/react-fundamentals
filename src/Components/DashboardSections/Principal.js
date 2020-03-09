import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Loading extends Component {
    render() {
        return (
            <div class="overlay">
                <i class="fa fa-refresh fa-spin"></i>
            </div>
        );
    }
}
export default class Dashboard extends Component {
    loadingMessage() {
        ReactDOM.render(<Loading />, document.getElementById('lalaland'));
    }
    render() {
        return (
            <div className="row">
                <div class="col-lg-6">
                    <h1> What's new?</h1>
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Tell your comunity what's happening... </h3>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body pad">
                            <form>
                                <textarea className="textarea" placeholder="Message" style={{ width: '100%', height: 200, fontSize: 14, lineHeight: 18, border: '1px solid #dddddd', padding: 10 }} defaultValue={""} />
                            </form>
                            <button onClick={this.loadingMessage} type="button" class="btn btn-block btn-warning">Send</button>
                        </div>
                        <div id="lalaland"></div>
                    </div>

                </div>
                <div className="col-lg-5">
                    <div class="info-box">
                        <span class="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Messages unread</span>
                            <span class="info-box-number">5</span>
                            <span class="progress-description">ProfesionalProfiles - Have you tried our app?</span>
                            <span class="progress-description">ProfesionalProfiles - 5 Frontends techniques...</span>
                        </div>
                    </div>
                    <div class="info-box bg-yellow">
                        <span class="info-box-icon"><i class="fa fa-calendar"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">New Eventes this week</span>
                            <span class="info-box-number">1</span>


                            <span class="progress-description">
                                1 event programmed for this week
                  </span>
                        </div>
                    </div>
                    {/* USERS LIST */}
                    <div className="box box-danger">
                        <div className="box-header with-border">
                            <h3 className="box-title">Latest Friends</h3>
                            <div className="box-tools pull-right">
                                <span className="label label-danger">4 New Friends</span>

                            </div>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body no-padding">
                            <ul className="users-list clearfix">
                                <li>
                                    <img src="dist/img/user1-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Alexander Pierce</a>
                                    <span className="users-list-date">Today</span>
                                </li>
                                <li>
                                    <img src="dist/img/user5-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Sarah</a>
                                    <span className="users-list-date">14 Jan</span>
                                </li>
                                <li>
                                    <img src="dist/img/user4-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Nora</a>
                                    <span className="users-list-date">15 Jan</span>
                                </li>
                                <li>
                                    <img src="dist/img/user3-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Nadia</a>
                                    <span className="users-list-date">15 Jan</span>
                                </li>
                            </ul>
                            {/* /.users-list */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
