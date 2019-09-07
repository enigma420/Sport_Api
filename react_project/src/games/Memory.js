import React, {Component} from 'react';



class MemoryGame extends Component {
constructor(){
    super();
    this.state = {
    cards: [],
    turnCounter: 0,
    lock: false,
    pairsLeft: 6,
    rand:[],
    arr:[],
    numbers:[]
    }
}

rollNumber = () => {

    var i, k;
    k = Math.floor((Math.random()*12)+1);
    this.state.numbers[0]=k;
    for (var j=1;j<12;j++){
        k = Math.floor((Math.random()*12)+1);
        i=0;
        while (i < this.state.numbers.length){
            if (this.state.numbers[i] === k){
                k = Math.floor((Math.random()*12)+1);
                i=0;
            }else {
                i++;
            }
        }
        this.state.numbers[j]=k;
    }
        console.log(this.state.numbers);

    for (let i = 0; i < 12; i++) {

        this.state.cards[i] = <img src={"/img/k"+ i +".png"} className="Card" id={"k" + this.state.numbers[i]}></img>
        console.log("cards", this.state.cards);
    }
    console.log("after for cards", this.state.cards);

}

revealCard = (number) => {
    let element = "k" + number;
    document.getElementById("Card").innerHTML =  <img src={"/img/k5.png"} className="Card" id={"k"+5}></img>
    var test =  document.getElementById(element);

    console.log(test);
}

revealFirstCard = () => {
    console.log("this.state.cards:", this.state.cards);
this.setState({
    cards: this.state.cards.map((card, i) => {
        this.state.arr = <img className="Card" onClick={() => this.revealCard(i)} id={"k"+i}>{this.state.cards[i]}</img>

        console.log("before this.state.arr:",this.state.arr)
    })
})

    console.log("after this.state.arr:",this.state.arr)

    return this.state.arr
}

revealFirstCard = (number) =>{
    let firstCard;

    return firstCard;
}

revealSecondCard = (number) => {
    let secondCard;

    return secondCard;
}

compareCards = (firstCard,secondCard) =>{

    if(firstCard === secondCard){}
    else{}

}

gameProcess = (pairsLeft) => {
    do{
       this.rollNumber();
       this.revealFirstCard();
        // this.revealFirstCard();
        // this.revealSecondCard();
        // this.compareCards();

    }while(pairsLeft > 0)
}

compareCards = (firstCard , secondCard) => {

}


    render() {
        return (
            <div>
                <button onClick={this.gameProcess}>START</button>
                <div className="board">

                    <img className="Card" onClick={this.revealCard(1)} id="k1"></img>
                    <img className="Card" id="k2"></img>
                    <img className="Card" id="k3"></img>
                    <img className="Card" id="k4"></img>

                    <div className="Card" id="k5"></div>
                    <div className="Card" id="k6"></div>
                    <div className="Card" id="k7"></div>
                    <div className="Card" id="k8"></div>

                    <div className="Card" id="k9"></div>
                    <div className="Card" id="k10"></div>
                    <div className="Card" id="k11"></div>
                    <div className="Card" id="k12"></div>

                    <div className="score">Turn counter:</div>

                </div>
            </div>
        );
    }
}

export default MemoryGame;

