import React, {Component} from 'react';



class MemoryGame extends Component {
constructor(){
    super();
    this.state = {
    cards: [],
    turnCounter: 0,
    lock: false,
    pairsLeft: 6
    }
}

rollNumber = () => {
    let rand;
    do {
        for (var i = 0; i < 12; i++) {
            rand[i] = (Math.random() * (12));
            console.log("rand: ", rand);
            for (var j = 0; j < i - 1; j++) {
                if (rand[i] === rand[j]) {
                    break;
                }
            }
        }
    }while(rand.length === 12);

    this.setState({
        cards: rand
    })


}
combineCardsWithImages = () => {
    
}
setNumberToCard = () => {

}



    render() {
        return (
            <div>
                <div className="board">

                    <div className="card" id="c0"></div>
                    <div className="card" id="c1"></div>
                    <div className="card" id="c2"></div>
                    <div className="card" id="c3"></div>

                    <div className="card" id="c4"></div>
                    <div className="card" id="c5"></div>
                    <div className="card" id="c6"></div>
                    <div className="card" id="c7"></div>

                    <div className="card" id="c8"></div>
                    <div className="card" id="c9"></div>
                    <div className="card" id="c10"></div>
                    <div className="card" id="c11"></div>

                    <div className="score">Turn counter:</div>

                </div>
            </div>
        );
    }
}

export default MemoryGame;

