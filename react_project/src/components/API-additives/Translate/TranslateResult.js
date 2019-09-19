import React from 'react';

const Result = props => {
    const{err,word,output,fromLang} = props.word;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );

    if(!err && word && fromLang){


        content = (
            <div className="list-group-item" style={{backgroundColor:"powderblue" , position:'relative'}}>
                <div className="cityApiResult">
                <h1>Your sentence: <b>{word}</b></h1>
                <h1>Output: <b>{output}</b></h1>
                <h5><b>Languages: {fromLang}</b></h5>
                </div>


            </div>
        )
    }

    return(
        <div className="result">
            {err ? `We don't have in db ${word}` : content}
        </div>
    )
};

export default Result