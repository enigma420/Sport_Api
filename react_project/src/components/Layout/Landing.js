import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Trans} from "react-i18next";

const imagesStyle = {
    width: "100%",
    height: '320px'
};

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    carouselImages = () => {
       return(
           <>
               <div className="item active">
                   <img src="https://www.w3schools.com/bootstrap/ny.jpg" style={imagesStyle}
                        alt="Los Angeles"
                   />
               </div>

               <div className="item ">
                   <img src="https://www.w3schools.com/bootstrap/chicago.jpg" style={imagesStyle}
                        alt="Chicago"
                   />
               </div>

               <div className="item">
                   <img src="https://www.w3schools.com/bootstrap/newyork.jpg" style={imagesStyle}
                        alt="New york"
                   />
               </div>
           </>
       )
    };

    carouselItem = () => {
        return(
            <>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" interval="1500">
                    <div className="carousel-inner"  style={imagesStyle}>
                        {this.carouselImages()}
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </>
            )
    };

    finalLandingPage = () => {
        return(
            <div className="landing">
                <div className=" landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="display-5 font-weight-bold">
                                    <Trans i18nKey="landing.intro"/>
                                </h2>
                                <hr/>
                                {this.carouselItem()}
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <>
                {this.finalLandingPage()}
            </>
        );
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);