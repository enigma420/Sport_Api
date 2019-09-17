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

    render() {
        const weatherParameters = this.props.parameters;
        return (

            <ListGroupItem  style={{backgroundColor:'wheat' , borderRadius:'10px' , border:'3px solid black' , padding:'0px' , marginTop:'4px' , marginBottom:'4px' , pageBreakInside: 'avoid'}}>
                <div>
                    <p onClick={this.toggle}>
                        <h3><b>{weatherParameters.dt_txt}</b></h3>

                    </p>

                    <Collapse isOpen={this.state.collapse}>
                        <hr/>
                    <p>Temperature: {weatherParameters.main.temp} &#176;C</p>
                    <p>Pressure: {weatherParameters.main.pressure} hPa</p>
                    <p>Humidity: {weatherParameters.main.humidity} %</p>
                    <p>Cloud cover: {weatherParameters.clouds.all} %</p>
                    <p>Wind speed: {weatherParameters.wind.speed} mph</p>
                        <hr/>
                    </Collapse>
                </div>
            </ListGroupItem>

        );
    }
}

export default ListGroupCollapse