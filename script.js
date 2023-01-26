
//  initialisation des variables du joeux
let tour = 0;
let score1 = 0;
let score2 = 0;
let resultatDes = 0;

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


//  function New Game qui reinitialise les scores et 
function newGame() {
    score1 = 0;
    score2 = 0;
    tourPlayer(1);

}
//  declarel les des -------------------------
// let nombreDes = document.getElementById('des0').lenght;


function tourPlayer(player) {
    //  si le  player1 joue il a la classe tour_player et on retire classe tour_player au player 2
    tour = player;
    btnHold.classList.add('inactive');

    let elements = document.getElementById('des0');

    // elements qui change le image ??????

    elements.setAttribute("src", "images/dice0.png");

    if (tour == 1) player1.classList.add('tour_player');
    else player1.classList.remove('tour_player');

    if (tour == 2) player2.classList.add('tour_player');
    else player2.classList.remove('tour_player');

    if(tour==0) btnRollDice.classList.add('inactive') ; 
    else btnRollDice.classList.remove('inactive') 

}


// function roll dice ca jet les des, ca genere le nombre aleatoire entre 1 et 6 , ca change l'image et la valeur de resultatDes,  si resultat egale a 1 c'est au tour d'un autre joueur et on affecte le resultatDes au courrent

function rollDice() {

    //nouvelle variable nombre qui stock  le chiffre aleatoire entre 1 et 6

    let nombre = Math.floor(Math.random() * 6) + 1;

    // nouvelle variable qui stock image de des

    let elements = document.getElementById('des0');

    // elements qui change le image ??????

    elements.setAttribute("src", "images/dice" + nombre + ".png");

    //  le resultat de resultatDes egale nombre aleatoire

    resultatDes = nombre;

    console.log(resultatDes)
    // afficher la somme des  resultats de resultatDes dans le cunteur pour ensuite le stocke dans le current
    btnHold.classList.remove('inactive');
    // let cunteur = resultatDes ;
    // 
    if (tour == 1) {
        current1.textContent = resultatDes;
        if (resultatDes == 1) {
            tourPlayer(2);
            alert("jueur 1 vous passer votre tour");
        }
    }
    else {
        current2.textContent = resultatDes;
        if (resultatDes == 1) {
            tourPlayer(1);
            alert("jueur 2 vous passer votre tour");
        }
    }






    // current1 = resultatDes.tourPlayer()



    // si le resultat est de 1 le joueur passe son tour




}

// on ajoute le resultatDes au score du joueur en cours est c'est le tour a l'autre joueur, le jeux s'arrett au score 100 et alert apparet avec le joueur gagniant

function hold() {
    if (tour == 1) {
        score1 = score1 + resultatDes;
        divScore1.textContent = score1;
        if (score1 >= 10) {
            alert("Jueur 1 vous avez gagné ! ");
            tourPlayer(0);
        }
        else tourPlayer(2);
    }
    else {
        score2 = score2 + resultatDes;
        divScore2.textContent = score2;
        if (score2 >= 10) {
            alert("Jueur 2 vous avez gagné ! ");
            tourPlayer(0);
        }
        else tourPlayer(1);


    }

}
    btnHold.addEventListener('click', hold);
    btnRollDice.addEventListener('click', rollDice);
    btnNewGame.addEventListener('click', newGame);















    const lancerDe = function () {
        const nombreDecimal = (Math.random() * 6) + 1
        const nombre = Math.trunc(nombreDecimal)

        return nombre
    }
    // creation de objets resultat
    const deChiffre = {

    }

    // garder le resultat
    const resultat = lancerDe()