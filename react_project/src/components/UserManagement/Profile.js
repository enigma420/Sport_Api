import React, {Component} from 'react';

class Profile extends Component {

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
                        <td>Firstname</td>
                        <td>VARIABLE</td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>VARIABLE</td>
                    </tr>
                    <tr>
                        <td>Date of Birthday</td>
                        <td>VARIABLE</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>VARIABLE</td>
                    </tr>
                    <tr>
                        <td>Place of birth:</td>
                        <td>VARIABLE</td>
                    </tr>
                    <tr>
                        <td>Citizenship</td>
                        <td>VARIABLE</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    };

    personalHead = () => {
        return(
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
                {this.fastUserInfo()}
            </div>
        )
    };

    fastUserInfo = () => {
        return(
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
                                    <p>Variables</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Surname:</label>
                                    <p>Variables</p>
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
        )
    };

    formDetails = () => {
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
                        <form className="form-horizontal">
                            <fieldset>
                                <legend>Address Details</legend>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">Line 1</label>
                                    <div className="col-sm-10">
                                        <input type="text" placeholder="Address Line 1"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">Line 2</label>
                                    <div className="col-sm-10">
                                        <input type="text" placeholder="Address Line 2"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">City</label>
                                    <div className="col-sm-10">
                                        <input type="text" placeholder="City"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">State</label>
                                    <div className="col-sm-4">
                                        <input type="text" placeholder="State"
                                               className="form-control"/>
                                    </div>
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">Postcode</label>
                                    <div className="col-sm-4">
                                        <input type="text" placeholder="Post Code"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                           htmlFor="textinput">Country</label>
                                    <div className="col-sm-10">
                                        <input type="text" placeholder="Country"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="pull-right">
                                            <button type="submit"
                                                    className="btn btn-default">Cancel
                                            </button>
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
        return (
            <div className="container" style={{marginTop:'10px' , marginBottom:'100px', }} >
                {this.personalHead()}
                <br/>
                <br/>
                {this.details()}
            </div>
        );
    }
}

export default Profile;