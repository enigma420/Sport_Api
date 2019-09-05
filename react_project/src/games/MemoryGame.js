// import $ from 'jquery';
// import React, {Component} from 'react';
// import './styleMemoryGame.css';
// import ReactDOM from 'react-dom';
//
// let cards = ["ciri.png",
//     "geralt.png" ,
//     "jaskier.png" ,
//     "iorweth.png" ,
//     "yen.png" ,
//     "triss.png" ,
//     "ciri.png",
//     "geralt.png",
//     "jaskier.png",
//     "iorweth.png",
//     "yen.png",
//     "triss.png"];
//
// //alert(cards[4]);
//
// //console.log(cards);
//
// let c0 = document.getElementById('c0');
// let c1 = document.getElementById('c1');
// let c2 = document.getElementById('c2');
// let c3 = document.getElementById('c3');
// let c4 = document.getElementById('c4');
// let c5 = document.getElementById('c5');
// let c6 = document.getElementById('c6');
// let c7 = document.getElementById('c7');
// let c8 = document.getElementById('c8');
// let c9 = document.getElementById('c9');
// let c10 = document.getElementById('c10');
// let c11 = document.getElementById('c11');
//
//
//
//
//
//
// let oneVisible = false;
// let turnCounter = 0;
// let visible_nr;
// let lock = false;
// let pairsLeft = 6;
// function revealCard(nr) {
//     c0.addEventListener("click", function () {revealCard(0);});
//     c1.addEventListener("click", function () {revealCard(1);});
//     c2.addEventListener("click", function () {revealCard(2);});
//     c3.addEventListener("click", function () {revealCard(3);});
//     c4.addEventListener("click", function () {revealCard(4);});
//     c5.addEventListener("click", function () {revealCard(5);});
//     c6.addEventListener("click", function () {revealCard(6);});
//     c7.addEventListener("click", function () {revealCard(7);});
//     c8.addEventListener("click", function () {revealCard(8);});
//     c9.addEventListener("click", function () {revealCard(9);});
//     c10.addEventListener("click", function () {revealCard(10);});
//     c11.addEventListener("click", function () {revealCard(11);});
//
//     let opacityValue = $('#c'+nr).css('opacity');
//
//     // alert("Opacity: " + opacityValue);
//     if(opacityValue != 0 && lock ==false){
//
//         lock = true;
//
//         // alert(nr);
//
//         let obraz  = "url(img/" + cards[nr] + ")";
//
//
//         $('#c'+nr).css('background-image' , obraz);
//         $('#c'+nr).addClass('cardA');
//         $('#c'+nr).removeClass('card');
//
//         if(oneVisible == false){
//             // first card
//
//             oneVisible = true;
//             visible_nr = nr;
//             lock = false;
//         }
//         else{
//             // second card
//
//             if(cards[visible_nr] == cards[nr]){
//                 // alert("para");
//
//                 hide2Cards(nr,visible_nr);
//                 setTimeout(function (){hide2Cards(nr , visible_nr)} , 750);
//
//             }
//             else{
//                 // alert("pudlo");
//
//                 setTimeout(function (){restore2Cards(nr , visible_nr) }, 1000);
//
//
//             }
//             turnCounter++;
//             $('.score').html('Turn counter: ' + turnCounter);
//             oneVisible = false;
//         }
//
//     }
//
// }
// function hide2Cards(nr1 , nr2) {
//     $('#c'+nr1).css('opacity' , '0');
//     $('#c'+nr2).css('opacity' , '0');
//
//     pairsLeft--;
//
//     if(pairsLeft == 0){
//         $('.board').html('<h1>You Win <br> Done in '+turnCounter+ 'turns</h1>');
//     }
//     lock = false;
//
// }
//
// function restore2Cards(nr1,nr2) {
//     $('#c'+nr1).css('background-image' , 'url(img/karta.png)');
//     $('#c'+nr1).addClass('card');
//     $('#c'+nr1).removeClass('cardA');
//
//     $('#c'+nr2).css('background-image' , 'url(img/karta.png)');
//     $('#c'+nr2).addClass('card');
//     $('#c'+nr2).removeClass('cardA');
//
//     lock = false;
// }
//
//
//
// class MemoryGame extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="board">
//
//                     <div className="card" id="c0"></div>
//                     <div className="card" id="c1"></div>
//                     <div className="card" id="c2"></div>
//                     <div className="card" id="c3"></div>
//
//                     <div className="card" id="c4"></div>
//                     <div className="card" id="c5"></div>
//                     <div className="card" id="c6"></div>
//                     <div className="card" id="c7"></div>
//
//                     <div className="card" id="c8"></div>
//                     <div className="card" id="c9"></div>
//                     <div className="card" id="c10"></div>
//                     <div className="card" id="c11"></div>
//
//                     <div className="score">Turn counter:</div>
//
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default MemoryGame;
//
