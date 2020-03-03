import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getPersonalData} from "../../actions/personalDataActions";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {getTeams} from "../../actions/teamActions";

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "dimgrey",
    fontSize: 28,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};


class Profile extends Component {

    componentDidMount() {
        console.log("Params:" + JSON.stringify(this.props.match.params));
        const { pesel } = this.props.match.params;
        this.props.getPersonalData(pesel, this.props.history);
    }

    personalInfo = () => {

        return(
            <div className="tab-pane active" id="tab_default_1" style={{backgroundColor:'darkgrey'}}>
                <div className="well well-sm">
                    <h6 style={teamLeadStyle}>PERSONAL INFO DETAILS</h6>
                </div>
                <p style={{align:'right'}}>
                    <button type="button" className="btn btn-default btn-sm">
                        Edit
                    </button>
                </p>
                <table className="table bio-table">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td>Surname</td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td>Pesel</td>
                        <td>Variable</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    };

    formDetails = () => {

        return(
            <React.Fragment>
            <Link to="/profile/createPersonalData" className="btn btn-lg btn-primary">
            CREATE PERSONAL DATA FORM
            </Link>
            </React.Fragment>
            )

    };

    bookmarks = () => {
        return(
            <ul className="nav nav-tabs ">
                <li className="active">
                    <a href="#tab_default_1" data-toggle="tab" style={{backgroundColor:'darkgrey',fontSize:'16px'}}><strong>Personal Info Details</strong></a>
                </li>
                <li>
                    <a href="#tab_default_3" data-toggle="tab" style={{backgroundColor:'darkgrey',fontSize:'16px'}}><strong>Personal Data Form</strong></a>
                </li>
            </ul>
        )
    };

    details = () => {
        return(
            <div className="container">
                <div className="col-sm-12">
                    <div className="tabbable-panel">
                        <div className="tabbable-line">
                            {this.bookmarks()}
                            <div className="tab-content" style={{backgroundColor:'darkgrey'}}>
                                {this.personalInfo()}
                                {this.formDetails()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        const { pesel } = this.props.match.params;
        const { personalData } = this.props.personalData;
        return (
            <div className="container" style={{marginTop:'10px' , marginBottom:'100px', }} >
                <div className="profile-head">

                    <div className="col-md- col-sm-4 col-xs-12">
                        <img src="http://www.newlifefamilychiropractic.net/wp-content/uploads/2014/07/300x300.gif"
                             className="img-responsive" alt={"face"} style={{backgroundColor:'darkgrey'}}/>
                        <div className="container" style={{textAlign:'center'}}>
                            <div className="btn btn-primary uplod-file" style={{display: "inline-block",textAlign:'center',fontSize:'14px',fontWeight:'bolder'}} >
                                Upload Photo <input type="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="panel panel-default" style={{backgroundColor:'darkgrey',border:'3px grey solid' , boxShadow: '0px 10px 8px 0px rgba(0,0,0.4,0.5)'}}>
                            <div className="menu_title">
                                <p style={{textAlign:'center'}}>User Information</p>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12" style={{textAlign:'center'}}>
                                        <div className="form-group">
                                            <label htmlFor="email">Name:</label>
                                            <p>{personalData.name}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Surname:</label>
                                            <p>{personalData.surname}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">PESEL:</label>
                                            <p>{personalData.pesel}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Country:</label>
                                            <p>{personalData.country}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">City:</label>
                                            <p>{personalData.city}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Age:</label>
                                            <p>{personalData.age}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                {this.details()}
            </div>
        );
    }
}

Profile.propTypes = {
    personalData: PropTypes.object.isRequired,
    getPersonalData: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    personalData: state.personalData,
    errors:state.errors
});

export default connect(mapStateToProps, {getPersonalData})(Profile);

