import React, {Component} from 'react';
import exchange from '../../../src/exchange.jpg'
import facts from '../../../src/facts.jpg'
import translate from '../../../src/translate.jpg'
import country from '../../../src/currency.jpg'
import weather from '../../../src/weather.jpeg'
import xxx from '../../../src/xxx.jpg'


const cardStyle = {
    width:'30%',
    border:'2px blue solid',
    borderRadius:'5px',
    margin:'8px',
};

const imgStyle = {
    height:'150px',
    border:'3px salmon solid',
    borderRadius:'5px'
}

class ApiCenter extends Component {

    CurrencyApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/currency">
                    <img className="card-img-top" src={exchange} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Currency Exchange</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            This Currency API lets you check current value of various currencies and conversion factors</p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    FactsApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/facts">
                    <img className="card-img-top" src={facts} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Facts</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            This Facts API shows every 7 seconds a random fact using the date entered that time</p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    TranslateApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/translate">
                    <img className="card-img-top" src={translate} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Translate</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            This Translate API lets you translate words or sentences in few languages</p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    CountryApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/country">
                    <img className="card-img-top" src={country} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Country</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            This Country API shows you basic details about the entered country </p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    WeatherCurrencyApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/weather">
                    <img className="card-img-top" src={weather} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Weather</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            This Weather API lets you check the weather for next 5 days (in 3 hours periods)</p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    NotExistApi(){
        return(
            <div className="apiCards" style={cardStyle}>
                <a href="/info_center/xxx">
                    <img className="card-img-top" src={xxx} alt="Card image cap" style={imgStyle}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API XXX</h3><hr style={{backgroundColor:'dodgerblue'}}/>
                            in build...</p><hr style={{backgroundColor:'dodgerblue'}}/>
                    </div>
                </a>
            </div>
        )
    }
    ApiCentrum = () => {
        return(

                <div className="apicenterboard">
                    <div className="row" style={{marginLeft:'20px' , marginRight:1}}>
                        {this.CurrencyApi()}
                        {this.FactsApi()}
                        {this.TranslateApi()}
                    </div>
                    <div className="row" style={{marginLeft:'20px' , marginRight:1}}>
                        {this.CountryApi()}
                        {this.WeatherCurrencyApi()}
                        {this.NotExistApi()}
                    </div>

                </div>

        )
    }

    render() {
        return (
            this.ApiCentrum()
        );
    }
}

export default ApiCenter;