import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Landing extends Component {

    componentDidMount() {
        if(this.props.security.validToken){
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (

            <div className="landing">
                <div className=" landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="display-5 font-weight-bold">
                                    hello
                                </h2>
                                <hr/>
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="Los Angeles"
                                                 />
                                        </div>

                                        <div className="item">
                                            <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago"
                                                 />
                                        </div>

                                        <div className="item">
                                            <img src="https://www.w3schools.com/bootstrap/newyork.jpg" alt="New york"
                                                 />
                                        </div>
                                    </div>

                                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <hr/>
                                <p className="lead font-weight-bolder">
                                    Create your account to join active projects or start your own
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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