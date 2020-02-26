import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTeam} from "../../actions/teamActions";
import {Trans} from "react-i18next";


class TeamItemSidebar extends Component {
    onDeleteClick = id => {
        this.props.deleteTeam(id);
    };

    render() {
        const { team } = this.props;
        return (
            <div>
                <div className="nameOfTeam" >{team.nameOfTeam}</div>
                <a href="#" style={{width:'100px'}}>
                    <li className="delete teamMenu h4"
                        onClick={this.onDeleteClick.bind(
                            this,
                            team.teamIdentifier
                        )}>
                        <i className="fa fa-minus-circle">
                            <Trans i18nKey="teamItem.deleteTeam"/>
                        </i>
                    </li>
                </a>

                <Link to={`/eventBoard/${team.teamIdentifier}`}>
                    <li className="delete teamMenu h4">
                        <i className=" fa fa-flag-checkered" >&nbsp;
                            <Trans i18nKey="teamItem.events"/>
                        </i>
                    </li>
                </Link>

                <hr style={{backgroundColor:'lightskyblue'}}/>
            </div>
        );
    }
}


TeamItemSidebar.propTypes = {
    deleteTeam: PropTypes.func.isRequired
};

export default connect(null,{deleteTeam})(TeamItemSidebar);