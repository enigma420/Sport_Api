import React from 'react';

const Result = props => {
    const{err,word,output,fromLang,toLang} = props.word;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );

    if(!err && word && fromLang && toLang){


        content = (
            <div className="list-group-item" style={{backgroundColor:"powderblue" , position:'relative'}}>
                <div className="cityApiResult">
                <h1>Your sentence: <b>{word}</b></h1>
                <h1>Output: <b>{output}</b></h1>
                <h5><b>from language: {fromLang}</b></h5>
                <h5><b>to language: {toLang}</b></h5>
                </div>


            </div>
        )
    }else{
        return <div className="cityApiResult">        <h2>This sentence doesn't exist: <b>{word}</b></h2>
        </div>
    }

    return(
        <div className="result">
            {err ? `We don't have in db ${word}` : content}
        </div>
    )
};

export default Result