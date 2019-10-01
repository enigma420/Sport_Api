import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";
import {Trans} from "react-i18next";
import {getTeams} from "../../actions/teamActions";
import TeamItemSidebar from "../Team/TeamItemSidebar";

class Sidebar extends Component {

    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        const { user } = this.props.security;
        const { teams } = this.props.team;

        return (
            <div id="mySidenav" className="sidenav">
                <nav className="main-menu bg-info">
                    <ul>
                        <img src={process.env.PUBLIC_URL + './avatar.jpg'}  alt="logo" className="logos" />
                        <div className="PROFILE_LEAD">{user.fullName}</div>
                        <li>
                            <a href="/dashboard">
                                <i  id="sideBarIcons" className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.dashboard"/>
    </span>
                            </a>
                        </li>
                            <li>
                            <a href="/profile">
                                <i id="sideBarIcons" className="fa fa-smile-o fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.profile"/>
    </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/friends">
                                <i  id="sideBarIcons" className="fa fa-users fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.friends"/>
    </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/dashboard">
                                <i  id="sideBarIcons" className="fa fa-tasks "></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.teams"/>
    </span>
                            </a>

                        </li>
                        <li>
                            <a href="/calendar">
                                <i  id="sideBarIcons" className="fa fa-calendar fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.eventsCalendar"/>
    </span>
                            </a>
                        </li>

                        <li>
                            <a href="/weather">
                                <i  id="sideBarIcons" className="fa fa-cloud fa-x"></i>
                                <span className="nav-text">
    <div className="btn-group dropright">
  <button type="button"  data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
    Dropright
  </button>
  <div className="dropdown-menu">
      <div>
          {teams.map(team => (
              <TeamItemSidebar key={team.id} team={team}/>
          ))}
      </div>
  </div>
</div>
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/info_center">
                                <i  id="sideBarIcons" className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.infoCenter"/>
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <i  id="sideBarIcons" className="fa fa-phone fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.contact"/>
    </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <a href="/">
                                <i  id="sideBarIcons" className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
    <Trans i18nKey="sidebar.logout"/>
    </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired,
    team: PropTypes.object.isRequired,
    getTeams: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    team: state.team
});

export default connect(mapStateToProps,{logout,getTeams})(Sidebar);