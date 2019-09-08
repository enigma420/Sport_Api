import React from 'react';

const TranslateToLangForm = props => {
    return(
        <form>
            <input
                className="searchCity"
                value={props.toLang}
                onChange={props.change}
                placeholder="To lang..."/>
        </form>
    )
};

export default TranslateToLangForm;