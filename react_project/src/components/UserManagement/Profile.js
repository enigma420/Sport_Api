import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
                <div className="container" >
                    <div className="profile-head">
                        <div className="col-md- col-sm-4 col-xs-12">
                            <img src="http://www.newlifefamilychiropractic.net/wp-content/uploads/2014/07/300x300.gif"
                                 className="img-responsive" alt={"ba"}/>
                            <h6>Vijayan Karuppaiah</h6>
                            <div className="container">
                <span className="btn btn-default uplod-file">
                        Upload Photo <input type="file"/>
                </span>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <h5>Vijayan Karuppaiah</h5>
                            <p>Content Designer / Content Engineer </p>

                        </div>
                    </div>


                <br/>
                <br/>

                <div className="container">
                    <div className="col-sm-8">
                        <div data-spy="scroll" className="tabbable-panel">
                            <div className="tabbable-line">
                                <ul className="nav nav-tabs ">
                                    <li className="active">
                                        <a href="#tab_default_1" data-toggle="tab">Personal Info </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_2" data-toggle="tab">Education</a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_3" data-toggle="tab">Work Experience</a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_4" data-toggle="tab">Contact Details</a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_5" data-toggle="tab">Address Details</a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_6" data-toggle="tab">Resume</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab_default_1">
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
                                                <td>: Vijayan</td>
                                            </tr>
                                            <tr>
                                                <td>Lastname</td>
                                                <td>: Karuppaiah</td>
                                            </tr>
                                            <tr>
                                                <td>Date of Birthday</td>
                                                <td>: 6 March 1980</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>: Male</td>
                                            </tr>
                                            <tr>
                                                <td>Spouse</td>
                                                <td>: Vijayalakshmi</td>
                                            </tr>
                                            <tr>
                                                <td>Name of Children</td>
                                                <td>: Darshan</td>
                                            </tr>
                                            <tr>
                                                <td>Father's Name</td>
                                                <td>: Karuppaiah</td>
                                            </tr>
                                            <tr>
                                                <td>Mother's Name</td>
                                                <td>: Palani Mayil</td>
                                            </tr>
                                            <tr>
                                                <td>Citizenship</td>
                                                <td>: Indian</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-pane" id="tab_default_2">
                                        <div className="well well-sm">
                                            <h4>EDUCATIONAL BACKGROUND</h4>
                                        </div>
                                        <p style={{align:'right'}}>
                                            <button type="button" className="btn btn-default btn-sm">
                                                Edit
                                            </button>
                                        </p>
                                        <table className="table bio-table">
                                            <tbody>
                                            <tr>
                                                <td>Elementary School</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>High School</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Under Graduate</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Post Graduate</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Master of Philosophy (MPhil)</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Doctor of Philosophy (PhD)</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Bachelor of Engineering (B.Eng)<br/>Bachelor of Technology (B.Tech)
                                                </td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Master of Engineering (M.Eng)<br/>Master of Technology (M.Tech)</td>
                                                <td>:</td>
                                                <td>Year Graduated</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-pane" id="tab_default_3">
                                        <div className="well well-sm">
                                            <h4>EMPLOYMENT RECORD</h4>
                                        </div>
                                        <p style={{align:'right'}}>
                                            <button type="button" className="btn btn-default btn-sm">
                                                 Edit
                                            </button>
                                        </p>
                                        <table className="table bio-table">
                                            <tbody>
                                            <tr>
                                                <td>Date</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Position</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Principle Activites</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Employer</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Type of Activites</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <br/>

                                        <table className="table bio-table">
                                            <tbody>
                                            <tr>
                                                <td>Date</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Position</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Principle Activites</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Employer</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Type of Activites</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <br/>

                                        <table className="table bio-table">
                                            <tbody>
                                            <tr>
                                                <td>Date</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Position</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Principle Activites</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Employer</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Type of Activites</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-pane" id="tab_default_4">
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
                                                <td>Office Telephone Number</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Office Mobile Phone</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Official Email Address</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Personal Mobile Phone</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Personal Email Address</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Home Phone</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Facebook Account</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Twitter Account</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>Skype Account</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td>LinkedIn Account</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-pane" id="tab_default_5">
                                        <div className="well well-sm">
                                            <h4>ADDRESS DETAILS</h4>
                                        </div>
                                        <p style={{align:'right'}}>
                                            <button type="button" className="btn btn-default btn-sm">
                                                 Edit
                                            </button>
                                        </p>
                                        <table className="table bio-table">
                                            <thead>
                                            <tr>
                                                <th colSpan="2">Present Residential Address</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td> Line 1</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Line 2</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> City</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> State</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Country</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Pin code</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <br/>

                                        <table className="table bio-table">
                                            <thead>
                                            <tr>
                                                <th colSpan="2">Permanent Residential Address</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td> Plot No / Door No / Part No / Block No</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Street Name</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> City</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> State</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Country</td>
                                                <td>:</td>
                                            </tr>
                                            <tr>
                                                <td> Pin code</td>
                                                <td>:</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                    <div className="tab-pane" id="tab_default_6">
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

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="menu_title">
                                <b>Employee Info</b>
                                <p>RSI Content Solutions India Pvt. Ltd</p>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Name:</label>
                                            <p>Vijayan K. </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Emp ID:</label>
                                            <p>1020</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Data of Joining:</label>
                                            <p>09-05-2016</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Blood Group:</label>
                                            <p>O+ve</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">In Case of emergency please contact:</label>
                                            <p>9500028421</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Profile;