import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/createTeam" className="btn btn-lg btn-primary">
                Create Team
            </Link>
        </React.Fragment>
    );
};

export default CreateProjectButton;