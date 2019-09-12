import React, {Component} from 'react';
import {Trans} from "react-i18next";

class Footer extends Component {
    render() {
        return (
<div>
            <div className="footer">
                <ul>
                <div className="container ">
                    <p className="navbar-text pull-left" className="copywriter">©CopyWriter -> 2019 Simple App
                        <a href="http://tinyurl.com/tbvalid"  className="copywriter"> HTML 5</a>
                        <h5>
                            <Trans i18nKey="footer"/>
                        </h5>
                    </p>
                </div>
                </ul>
                <ul>
                    <div className="icons">
                <a href="http://www.skype.com" className="demo-icon icon-skype"></a>
                <a href="http://www.twitter.com" className="demo-icon icon-twitter"></a>
                <a href="http://www.facebook.com" className="demo-icon icon-facebook-rect"></a>
                <a href="http://www.google.com" className="demo-icon icon-googleplus-rect"></a>
                <a href="http://www.booking.com" className="demo-icon icon-vkontakte-rect"></a>
                <a href="http://www.linkedin.com" className="demo-icon icon-linkedin-rect"></a>
                <a href="http://www.youtube.com" className="demo-icon icon-youtube"></a>
                    </div>
                </ul>
                </div>
</div>
        );
    }
}

export default Footer;