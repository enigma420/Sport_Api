import React from 'react';

const TranslateOutputForm = props => {
    return(
        <form>
            <input
                className="searchCity"
                value={props.out}
                onChange={props.change}
                placeholder="Enter Sentence..."/>

        </form>
    )
};

export default TranslateOutputForm;