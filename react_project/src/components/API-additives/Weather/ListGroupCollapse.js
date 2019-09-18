import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class ListGroupCollapse extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    Approximately(n,k) {
        var factor = Math.pow(10,k);
        return Math.round(n*factor)/factor
    }

    render() {
        const weatherParameters = this.props.parameters;
        return (

            <ListGroupItem style={{backgroundColor:'wheat' , borderRadius:'10px' , border:'3px solid black' , margin:'5px' ,  pageBreakInside: 'avoid' , minWidth:'155px' , maxHeight:'280px' }}>
                    <p onClick={this.toggle}>
                        <h4><b>{weatherParameters.dt_txt}</b></h4>

                    </p>

                    <Collapse isOpen={this.state.collapse}>
                        <hr/>
                    <p>Temperature: {this.Approximately(weatherParameters.main.temp,0)}&#176;C</p>
                    <p>Pressure: {this.Approximately(weatherParameters.main.pressure,0)}hPa</p>
                    <p>Humidity: {weatherParameters.main.humidity}%</p>
                    <p>Cloud: {weatherParameters.clouds.all}%</p>
                    <p>Wind: {weatherParameters.wind.speed} mph</p>
                    </Collapse>
            </ListGroupItem>

        );
    }
}

export default ListGroupCollapse