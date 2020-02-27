import React, {Component} from 'react';
import {Trans} from "react-i18next";

class Contact extends Component {

    leftSideOfContactForm = () => {
        return(
            <div className="col-md-3">
                <div className="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2 style={{textAlign:'center'}}>
                        <Trans i18nKey="contact.contactUs"/>
                    </h2>
                    <h4 style={{textAlign:'center'}}>
                        <Trans i18nKey="contact.contactGreeting"/>
                    </h4>
                </div>
            </div>
        )
    };

    contactForm = () => {
        return(
            <div className="col-md-9">
                <div className="contact-form">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="fname" style={{color:'black'}}>
                            <Trans i18nKey="contact.firstName"/>
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fname"
                                   placeholder="Enter First Name" name="fname"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="lname" style={{color:'black'}}>
                            <Trans i18nKey="contact.lastName"/>
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"
                                   name="lname"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email" style={{color:'black'}}>
                            <Trans i18nKey="contact.email"/>
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email"
                                   name="email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="comment" style={{color:'black'}}>
                          <Trans i18nKey="contact.message"/>
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="5" id="comment"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" style={{float:'right',marginTop:20}}>
                                <h3><Trans i18nKey="contact.submit"/></h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    contactLayout = () => {
        return (
            <div className="container contact">
                <div className="row"  style={{borderRadius:'10px',border:'2px solid black'}}>
                    {this.leftSideOfContactForm()}
                    {this.contactForm()}
                </div>
            </div>
        )
    }

    render() {
        return (

            <>
                {this.contactLayout()}
            </>


        );
    }
}

export default Contact;