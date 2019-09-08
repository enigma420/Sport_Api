import React from 'react';

const TranslateFromLangForm = props => {
    return(
        <form>
            <input
                className="searchCity"
                value={props.fromLang}
                onChange={props.change}
                placeholder="From lang..."/>
        </form>
    )
};

export default TranslateFromLangForm;