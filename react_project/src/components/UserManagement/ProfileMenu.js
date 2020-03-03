import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getPersonalData} from "../../actions/personalDataActions";

class ProfileMenu extends Component {


    componentDidMount() {
        console.log("Params:" + JSON.stringify(this.props.match.params));
        const { pesel } = this.props.match.params;
        this.props.getPersonalData(pesel , this.props.history);
    }

    render() {
        const { pesel } = this.props.match.params;
        const { personalData } = this.props.getPersonalData(this.props.match.params);
        console.log("PersonalData:" + JSON.stringify(personalData));
        return (
            <div style={{textAlign:'center'}}>
                <div>
                    <React.Fragment>
                        <Link to={`/profile/${pesel}`}>
                            PERSONAL INFO
                        </Link>
                    </React.Fragment>
                </div>
                <div>
                    <React.Fragment>
                        <Link to="/profile/createPersonalData" className="btn btn-lg btn-primary">
                            CREATE PERSONAL DATA FORM
                        </Link>
                    </React.Fragment>
                </div>
                <div>
                    <React.Fragment>
                        <Link to="/profile/editPersonalData" className="btn btn-lg btn-primary">
                            EDIT PERSONAL DATA FORM
                        </Link>
                    </React.Fragment>
                </div>
            </div>
        );
    }
}

ProfileMenu.propTypes = {
    personalData: PropTypes.object.isRequired,
    getPersonalData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    personalData: state.personalData
});

export default connect(mapStateToProps, {getPersonalData})(ProfileMenu);