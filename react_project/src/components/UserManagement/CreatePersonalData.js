import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPersonalData} from "../../actions/personalDataActions";
import classnames from "classnames";


const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "dimgrey",
    fontSize: 28,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};
class CreatePersonalData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pesel: "",
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


    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});

        }
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
        console.log("Params:" + JSON.stringify(this.props.match.params));
    }

    render() {

        const {errors} = this.state;
        return(
            <div className="tab-pane" id="tab_default_3">
                <div className="well well-sm">
                    <h6 style={teamLeadStyle}>PERSONAL DATA FORM</h6>
                </div>
                <form onSubmit={this.onSubmit} className="form-horizontal" style={{margin:'20px'}}>
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
                        <div className="col-md-12">
                            <button type="submit"
                                    className="btn btn-primary"
                                    style={{alignContent:"center"}}>Save
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        )
    }
}
CreatePersonalData.propTypes = {
    createPersonalData: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{createPersonalData})(CreatePersonalData);
