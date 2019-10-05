import React, {Component} from 'react';
import {Trans} from "react-i18next";

class Footer extends Component {
    render() {
        return (
<div>
            <div className="footer">
                <div className="container" style={{height:'25px'}}>
                    <p className="navbar-text pull-left" className="copywriter">©CopyWriter -> 2019 Simple App
                        <a href="http://tinyurl.com/tbvalid"  className="copywriter"> HTML 5</a>
                        <h5>
                            <Trans i18nKey="footer"/>
                        </h5>
                    </p>
                </div>
                    <div className="icons" style={{width:'100%' , height:'30px'}}>
                <a href="http://www.skype.com" className="demo-icon icon-skype"/>
                <a href="http://www.twitter.com" className="demo-icon icon-twitter"/>
                <a href="http://www.facebook.com" className="demo-icon icon-facebook-rect"/>
                <a href="http://www.google.com" className="demo-icon icon-googleplus-rect"/>
                <a href="http://www.booking.com" className="demo-icon icon-vkontakte-rect"/>
                <a href="http://www.linkedin.com" className="demo-icon icon-linkedin-rect"/>
                <a href="http://www.youtube.com" className="demo-icon icon-youtube"/>
                    </div>
                </div>
</div>
        );
    }
}

export default Footer;