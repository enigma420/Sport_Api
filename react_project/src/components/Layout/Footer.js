import React, {Component} from 'react';

const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "5%",
    backgroundColor: "whitesmoke",
    borderTop: "2px solid seagreen",
    zIndex: 1,
    textAlign: 'center',
};

const iconStyle = {
    padding: 5,
};

class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                <div className="row" style={{textAlign: 'center', display: 'block'}}>
                    <a href="http://www.skype.com" style={iconStyle} className="demo-icon icon-skype"/>
                    <a href="http://www.twitter.com" style={iconStyle} className="demo-icon icon-twitter"/>
                    <a href="http://www.facebook.com" style={iconStyle} className="demo-icon icon-facebook-rect"/>
                    <a href="http://www.google.com" style={iconStyle} className="demo-icon icon-googleplus-rect"/>
                    <a href="http://www.booking.com" style={iconStyle} className="demo-icon icon-vkontakte-rect"/>
                    <a href="http://www.linkedin.com" style={iconStyle} className="demo-icon icon-linkedin-rect"/>
                    <a href="http://www.youtube.com" style={iconStyle} className="demo-icon icon-youtube"/>
                </div>
            </div>
        );
    }
}

export default Footer;