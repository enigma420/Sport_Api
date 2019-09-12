import React, {Component} from 'react';

class ApiCenter extends Component {

    CurrencyApi(){
        return(
            <div className="apiCards" style={{width:'30%' , border:'2px blue solid' , borderRadius:'5px', marginTop:'5px'}}>
                <a href="/currency">
                    <img className="card-img-top" src="../../currency.jpg" alt="Card image cap" style={{height:'150px' , border:'3px salmon solid' , borderRadius:'5px' }}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Currency Exchange</h3><hr style={{backgroundColor:'red'}}/>
                            This Currency API lets you check current value of various currencies and conversion factors</p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    FactsApi(){
        return(
            <div className="apiCards" style={{width:'30%' , border:'2px blue solid' , borderRadius:'5px' , marginLeft:'21px', marginTop:'5px'}}>
                <a href="/facts">
                    <img className="card-img-top" src="../../facts.gif" alt="Card image cap" style={{height:'150px' , border:'3px salmon solid' , borderRadius:'5px'}}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Facts</h3><hr style={{backgroundColor:'red'}}/>
                            This Facts API shows every 7 seconds a random fact using the date entered that time</p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    TranslateApi(){
        return(
            <div className="apiCards" style={{width:'30%',  border:'2px blue solid' , borderRadius:'5px' , marginLeft:'21px', marginTop:'5px'}}>
                <a href="/translate">
                    <img className="card-img-top" src="../../translator.jpg" alt="Card image cap" style={{height:'150px' , border:'3px salmon solid' , borderRadius:'5px' }}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Translate</h3><hr style={{backgroundColor:'red'}}/>
                            This Translate API lets you translate words or sentences in few languages</p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    CountryApi(){
        return(
            <div className="apiCards" style={{width:'30%' , border:'2px blue solid' , borderRadius:'5px', marginTop:'5px' , marginBottom:'5px'}}>
                <a href="/country">
                    <img className="card-img-top" src="../../country.png" alt="Card image cap" style={{height:'150px' ,border:'3px salmon solid' , borderRadius:'5px' }}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Country</h3><hr style={{backgroundColor:'red'}}/>
                            This Country API shows you basic details about the entered country </p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    WeatherCurrencyApi(){
        return(
            <div className="apiCards" style={{width:'30%',  border:'2px blue solid' , borderRadius:'5px' , marginLeft:'21px' , marginTop:'5px' , marginBottom:'5px'}}>
                <a href="/weather">
                    <img className="card-img-top" src="../../weat.png" alt="Card image cap" style={{height:'150px' , border:'3px salmon solid' , borderRadius:'5px' }}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API Weather</h3><hr style={{backgroundColor:'red'}}/>
                            This Weather API lets you check the weather for next 5 days (in 3 hours periods)</p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    NotExistApi(){
        return(
            <div className="apiCards" style={{width:'30%' , border:'2px blue solid' , borderRadius:'5px' , marginLeft:'21px', marginTop:'5px' , marginBottom:'5px'}}>
                <a href="/xxx">
                    <img className="card-img-top" src="logo.png" alt="Card image cap" style={{height:'150px' ,border:'3px salmon solid' , borderRadius:'5px' }}/>
                    <div className="card-body" style={{padding:'35px'}}>
                        <p className="card-text"><h3 style={{fontWeight:'bolder'}}>API XXX</h3><hr style={{backgroundColor:'red'}}/>
                            in build...</p><hr style={{backgroundColor:'red'}}/>
                    </div>
                </a>
            </div>
        )
    }
    ApiCentrum = () => {
        return(
            <div className="dashboard">
                <div className="apicenterboard">
                    <div className="row" style={{marginLeft:'14px'}}>
                        {this.CurrencyApi()}
                        {this.FactsApi()}
                        {this.TranslateApi()}
                    </div>
                    <div className="row" style={{marginLeft:'14px'}}>
                        {this.CountryApi()}
                        {this.WeatherCurrencyApi()}
                        {this.NotExistApi()}
                    </div>

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