import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTeam} from "../../actions/teamActions";
import {Trans} from "react-i18next";


const sideBarTeamContent = {
    color:'whitesmoke' ,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    whiteSpace:" pre-wrap",
    fontFamily: "'Francois One', sans-serif",
    fontSize: 24,
    padding: 1,
    borderBottom: "3px solid whitesmoke"
};

const teamMenuSideBarContentStyle = {
    color:'whitesmoke',
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    fontSize:'22px',
    textAlign: "center",
    listStyleType: "none",
    whiteSpace: "nowrap"
}

class TeamItemSidebar extends Component {
    onDeleteClick = id => {
        this.props.deleteTeam(id);
    };

    render() {
        const { team } = this.props;
        return (
            <>
                <br/>
            <div style={{border:'4px solid whitesmoke' , background:'dimgrey'}}>
                <div className="nameOfTeam" style={sideBarTeamContent}>{team.nameOfTeam}</div>
                <a href="#" style={{width:'100px'}}>
                    <li className="delete h4" style={teamMenuSideBarContentStyle}
                        onClick={this.onDeleteClick.bind(
                            this,
                            team.teamIdentifier
                        )}>
                        <i className="fa fa-minus-circle">
                            &nbsp;
                            <Trans i18nKey="teamItem.deleteTeam"/>
                        </i>
                    </li>
                </a>

                <Link to={`/eventBoard/${team.teamIdentifier}`}>
                    <li className="delete teamMenu h4">
                        <i className=" fa fa-flag-checkered" style={teamMenuSideBarContentStyle}>&nbsp;
                            <Trans i18nKey="teamItem.events"/>
                        </i>
                    </li>
                </Link>
            </div>
                </>
        );
    }
}


TeamItemSidebar.propTypes = {
    deleteTeam: PropTypes.func.isRequired
};

export default connect(null,{deleteTeam})(TeamItemSidebar);