import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/createTeam" className="btn btn-lg btn-primary">
                <i className="fas fa-plus-circle">&nbsp;Create Team</i>
            </Link>
        </React.Fragment>
    );
};

export default CreateProjectButton;