import React from "react";
import { Link } from "react-router-dom";
import {Trans} from "react-i18next";


const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/createTeam" className="btn btn-lg btn-primary">
                <i className="fas fa-plus-circle">
                    &nbsp;
                    <Trans i18nKey="createTeamButton"/>
                </i>
            </Link>
        </React.Fragment>
    );
};

export default CreateProjectButton;