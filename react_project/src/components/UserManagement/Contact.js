import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios'
import {Trans} from "react-i18next";

class Contact extends Component {

    render() {
        return (

            <div className="container contact" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="contact-info">
                            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                            <h2>
                                <Trans i18nKey="contact.contactUs"/>
                            </h2>
                            <h4>
                                <Trans i18nKey="contact.contactGreeting"/>
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="contact-form">
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="fname">
                                    <Trans i18nKey="contact.firstName"/>
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fname"
                                           placeholder="Enter First Name" name="fname"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="lname">
                                    <Trans i18nKey="contact.lastName"/>
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"
                                           name="lname"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email">
                                    <Trans i18nKey="contact.email"/>
                                </label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                                           name="email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="comment">
                                    <Trans i18nKey="contact.message"/>
                                </label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="5" id="comment"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">
                                        <Trans i18nKey="contact.submit"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Contact;