function randomNumber1(){
    var num = Math.random();
    num = Math.floor(num*6)+1;
    return num;
}

function randomDice(){
    var src = "./images/dice" + randomNumber1() + ".png";
    return src;
}
function checkWinner(){
    var dice1 = randomDice()
    var player1 = document.querySelector("#left").setAttribute("src", dice1);
    var dice2 = randomDice();
    var player2 = document.querySelector("#right").setAttribute("src", dice2);
    if(dice1>dice2){
        document.querySelector("#title").innerHTML="🚩 Player 1 Wins!";
        }
       else if(dice1<dice2){
            document.querySelector("#title").innerHTML="Player 2 Wins! 🚩";
            }    
    else document.querySelector("#title").innerHTML="Draw!";         
}

checkWinner();