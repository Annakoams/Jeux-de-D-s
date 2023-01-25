
//  initialisation des variables du joeux
let tour = 0;
let score1 =0;
let score2 =0;
let resultatDes =0;

// declarer une variables buttons
const btnNewGame = document.getElementById('btnNewGame')
const btnRollDice = document.getElementById('btnRollDice')
const btnHold = document.getElementById('btnHold')


// declarer les variables des players
const player1 = document.getElementById('divPlayer1')
const player2 = document.getElementById('divPlayer2')

//  declares les variables des current
const current1 = document.getElementById('current1')
const current2 = document.getElementById('current2')


//  declarer les scores 
const divScore1 = document.getElementById('divScore1')
const divScore2 = document.getElementById('divScore2')

function newGame () {
    score1 = 0;
    score2 = 0;
    tourPlayer(1);
}
//  declarel les des -------------------------
// let nombreDes = document.getElementById('des0').lenght;


function tourPlayer (player) {
//  si le  player1 joue il a la classe tour_player et on retire classe tour_player au player 2
    tour = player;
    if(tour == 1)player1.classList.add('tour_player');
        else player1.classList.remove('tour_player');
    
    if (tour == 2)player2.classList.add('tour_player');
        else player2.classList.remove('tour_player');
    
}


// function roll dice ca jet les des, ca genere le nombre aleatoire entre 1 et 6 , ca change l'image et la valeur de resultatDes,  si resultat egale a 1 c'est au tour d'un autre joueur et on affecte le resultatDes au courrent

function rollDice (){
    resultatDes=0;
    score1.textContent = resultatDes;
    score2.textContent = resultatDes;


    // for(let compteur=0 ; compteur <= resultatDes ; compteur++){

    //     let nombre= Math.floor(Math.random() * 6) +1 ;
    //     return nombre
    //     let elements = document.querySelector('img#des' + compteur);
    

    //     // .setAttribute("src","/images/dice"+ nombre + ".png");

    //     resultatDes = resultatDes + nombre ;
    // }
    



}

// on ajoute le resultatDes au score du joueur en cours est c'est le tour a l'autre joueur, le jeux s'arrett au score 100 et alert apparet avec le joueur gagniant

function hold (){

}


btnHold.addEventListener('click', hold);
btnRollDice.addEventListener('click',rollDice);
btnNewGame.addEventListener('click', newGame);















const lancerDe = function (){
    const nombreDecimal = (Math.random() * 6) +1
    const nombre = Math.trunc(nombreDecimal)

    return nombre
}
// creation de objets resultat
const deChiffre ={

}

// garder le resultat
const resultat = lancerDe()