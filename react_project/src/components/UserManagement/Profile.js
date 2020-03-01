import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPersonalData, getPersonalData} from "../../actions/personalDataActions";
import classnames from "classnames";
import {Link} from "react-router-dom";

class Profile extends Component {
constructor(props) {
    super(props);
    this.state = {
        pesel:"",
        name:"",
        surname:"",
        country:"",
        city:"",
        age:"",
        errors:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newPersonalData = {
            pesel: this.state.pesel,
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country,
            city: this.state.city,
            age: this.state.age
        };
        this.props.createPersonalData(newPersonalData, this.props.history);
    }

    personalInfo = () => {

        return(
            <div className="tab-pane active" id="tab_default_1" style={{backgroundColor:'darkgrey'}}>
                <div className="well well-sm">
                    <h4>PERSONAL DATA</h4>
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
        const {errors} = this.state;
        return(
            <div className="tab-pane" id="tab_default_3">
                <div className="well well-sm">
                    <h4>ADDRESS DETAILS</h4>
                </div>
                <p style={{align:'right'}}>
                    <button type="button" className="btn btn-default btn-sm">
                        Edit
                    </button>
                </p>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form onSubmit={this.onSubmit} className="form-horizontal">
                            <fieldset>
                                <legend>Address Details</legend>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">PESEL</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.pesel
                                            })}
                                            placeholder="Pesel"
                                            name="pesel"
                                            value={this.state.pesel}
                                            onChange={this.onChange}
                                        />
                                        {errors.pesel && (
                                            <div className="invalid-feedback">
                                                {errors.pesel}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">NAME</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.name
                                            })}
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">SURNAME</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.surname
                                            })}
                                            placeholder="Surname"
                                            name="surname"
                                            value={this.state.surname}
                                            onChange={this.onChange}
                                        />
                                        {errors.surname && (
                                            <div className="invalid-feedback">
                                                {errors.surname}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">COUNTRY</label>
                                    <div className="col-sm-4">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.country
                                            })}
                                            placeholder="Country"
                                            name="country"
                                            value={this.state.country}
                                            onChange={this.onChange}
                                        />
                                        {errors.country && (
                                            <div className="invalid-feedback">
                                                {errors.country}
                                            </div>
                                        )}
                                    </div>
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">CITY</label>
                                    <div className="col-sm-4">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.city
                                            })}
                                            placeholder="City"
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.onChange}
                                        />
                                        {errors.city && (
                                            <div className="invalid-feedback">
                                                {errors.city}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">AGE</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg" , {
                                                "is-invalid": errors.age
                                            })}
                                            placeholder="Age"
                                            name="age"
                                            value={this.state.age}
                                            onChange={this.onChange}
                                        />
                                        {errors.age && (
                                            <div className="invalid-feedback">
                                                {errors.age}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="pull-right">
                                            {/*<button type="submit"*/}
                                            {/*        className="btn btn-default">Cancel*/}
                                            {/*</button>*/}
                                            <button type="submit"
                                                    className="btn btn-primary">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    };

    contactDetails = () => {
        return(
            <div className="tab-pane" id="tab_default_2">
                <div className="well well-sm">
                    <h4>OFFICIAL AND PERSONAL CONTACTS</h4>
                </div>
                <p style={{align:'right'}}>
                    <button type="button" className="btn btn-default btn-sm">
                        Edit
                    </button>
                </p>
                <table className="table bio-table">
                    <tbody>
                    <tr>
                        <td>Telephone Number</td>
                        <td>:</td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td>:</td>
                    </tr>
                    <tr>
                        <td>Github Account</td>
                        <td>:</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    };

    bookmarks = () => {
        return(
            <ul className="nav nav-tabs ">
                <li className="active">
                    <a href="#tab_default_1" data-toggle="tab" style={{backgroundColor:'darkgrey',fontSize:'16px'}}><strong>Personal Info</strong></a>
                </li>
                <li>
                    <a href="#tab_default_2" data-toggle="tab" style={{backgroundColor:'darkgrey',fontSize:'16px'}}><strong>Contact Details</strong></a>
                </li>
                <li>
                    <a href="#tab_default_3" data-toggle="tab" style={{backgroundColor:'darkgrey',fontSize:'16px'}}><strong>Contact Details</strong></a>
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
                                {this.contactDetails()}
                                {this.formDetails()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        const {personalData} = this.props.personalData;
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
                                            <p>{personaldata.pesel}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Surname:</label>
                                            <p>{personaldata.name}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Date of Joining:</label>
                                            <p>Variables</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Address E-mail:</label>
                                            <p>Variables</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Telephone Number:</label>
                                            <p>Variables</p>
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
    createPersonalData: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    personalData: PropTypes.object.isRequired,
    getPersonalData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    personalData: state.personalData
});


export default connect(mapStateToProps,{createPersonalData,getPersonalData})(Profile);