import React, {Component} from 'react';

class Gallows extends Component {

    constructor(){
        super();
        this.state = {
            password: "siemano kurwa".toUpperCase(),
            passwordLen: 0,
            playerPasswordMatch: [],
            amountOfMissed: 0,
            letters: ["A", "Ą", "B", "C" , "Ć" , "D" , "E" , "Ę" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "Ł" , "M" , "N" , "Ń" ,
                "O" , "Ó" , "U" , "P" , "R" , "S" , "Ś" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" , "Ź" , "Ż"],
            i: 0,
            alphabeth: ''
        };
    }


    writeAlphabeth(){
        this.setState({
            alphabeth: this.state.letters.map((letter, i) => {
                return <div>
                    <div className="litera" onClick={() => this.checkLetterFunc(i)} id={"lit"+i}>{this.state.letters[i]}</div>
                    {(i+1)%7 === 0 ? <div style={{clear:'both'}}/>: null}
                </div>

            })
        })
    }

    prepareVariables = () => {
        let newLength = this.state.password.length;
        let playerPasswordMatch = this.getPasswordToGuess(newLength);
        console.log("before:: playerPasswordMatch: ", playerPasswordMatch, " newLength: ", newLength);
        this.setState({
            passwordLen: newLength,
            playerPasswordMatch: playerPasswordMatch,
        });
        console.log("after:: playerPasswordMatch: ", this.state.playerPasswordMatch, " newLength: ", newLength);
    };

    getPasswordToGuess(passwordLen) {
        const {password} = this.state;
        let newPlayerPasswordMatch = "";
        for(let i = 0 ; i < passwordLen ; i++){
            if(password.charAt(i) === " ") {
                newPlayerPasswordMatch += " ";
            } else {
                newPlayerPasswordMatch += "-";
            }
        }
        return newPlayerPasswordMatch;
    };

    setLetter = (index, letter, playerPassword) => {
        return playerPassword.substr(0, index) + letter + playerPassword.substr(index + 1);
    };

    addNewMissed = () => {
        let newAmountOfMissed = this.state.amountOfMissed + 1;
        this.setState({
            amountOfMissed: newAmountOfMissed
        });
    };

    setNewPlayerPasswordMatch(newPlayerPasswordMatch) {
        this.setState({
            playerPasswordMatch: newPlayerPasswordMatch
        });
    };

    checkLetterFunc = (number) => {
        let strike = false;

        let newPlayerPasswordMatch = this.state.playerPasswordMatch;
        let letter = this.state.letters[number];
        for(let i = 0 ; i < this.state.passwordLen; i++){

            if(this.state.password.charAt(i) === letter){
                newPlayerPasswordMatch = this.setLetter(i, letter, newPlayerPasswordMatch);
                strike = true;
            }
        }
        this.setNewPlayerPasswordMatch(newPlayerPasswordMatch);

        if (strike === true) {

            let element = "lit" + number;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid#00C000";
            document.getElementById(element).style.cursor = "default";
        } else{
            let element = "lit" + number;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick",";");
            //skucha
            this.addNewMissed();
            let obraz = "img/s" + this.state.amountOfMissed + ".jpg";
            document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
        }

        //wygrana

        if(this.state.password === newPlayerPasswordMatch)
            document.getElementById("alfabet").innerHTML = "ROZJEBALES MORDO WYGRALES ZYCIE <br> Password: "+ this.state.password +'<br>' +
                '<span class="reset" onClick="location.reload()">JESZCZE RAZ?</span>'

        //przegrana
        if(this.state.amountOfMissed >= 9)
            document.getElementById("alfabet").innerHTML = "PRZEGRALES ZYCIE <br> Password: "+ this.state.password +'<br>' +
                '<span class="reset" onClick="location.reload()">JESZCZE RAZ?</span>'
    };

    startGame = () => {
        this.prepareVariables();
        this.writeAlphabeth();
    };



    render() {
        return (
            <div>
                <title>Szubienica</title>
                <button onClick={this.startGame}>START</button>
                <div id="pojemnik">
                    <div id="plansza">{this.state.playerPasswordMatch}</div>
                    <div id="szubienica">
                        <img src="img/s0.jpg" alt="chuj"/>
                    </div>
                    <div id="alfabet">{this.state.alphabeth}</div>
                    {/*<div style="clear:both;"></div>*/}
                </div>

                {/*<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&subset=latin,latin-ext"*/}
                {/*      rel="stylesheet" type="text/css">*/}
            </div>
        );
    }
}

export default Gallows;