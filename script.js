
//  initialisation des variables du jeux
let tour = 0;
let score1 = 0;
let score2 = 0;
let resultatDes = 0;
const scoreToeach =100;

// declarer une variables buttons
const btnNewGame = document.getElementById('btnNewGame');
const btnRollDice = document.getElementById('btnRollDice');
const btnHold = document.getElementById('btnHold');

// declarer la varible de rotation , elle est desactive
let isRotating = false;

// declarer la variable elements qui contien l'images
let elements = document.getElementById('des0');


// declarer les variables des players
const player1 = document.getElementById('divPlayer1');
const player2 = document.getElementById('divPlayer2');

//  declares les variables des current
const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');


//  declarer les scores 
const divScore1 = document.getElementById('divScore1');
const divScore2 = document.getElementById('divScore2');

// declere les popups
const popup = document.getElementById('popup');

// declarer btn close
const btnClose = document.getElementById('btnClose');
// 
const h3Msg = document.getElementById('msg');

//  function New Game qui reinitialise les scores et change le tour a tourPlayer 1 
function newGame() {
    score1 = 0;
    score2 = 0;
    // 
    divScore1.textContent = score1;
    divScore2.textContent = score2;
    // 
    current1.textContent = "";
    current2.textContent = "";
    tourPlayer(1);
}


//  function showPopup  qui affiche un pop-up avec le message passé en paramètre.
function showPopup (message){
    popup.classList.add('active');
    h3Msg.textContent = message;
}
// function hidePopup qui retire le popup
function hidePopup(){
    popup.classList.remove('active');
}

// function tourPlayer change de tour en ajoutant la classe "tour_player" au joueur actuel et en enlevant la classe du joueur précédent. Il met également à jour l'image du dé à 0.

function tourPlayer(player) {
   
    tour = player;
    btnHold.classList.add('inactive');


    elements.setAttribute("src", "images/dice0.png");

    if (tour == 1) player1.classList.add('tour_player');
    else player1.classList.remove('tour_player');

    if (tour == 2) player2.classList.add('tour_player');
    else player2.classList.remove('tour_player');

    if (tour == 0) btnRollDice.classList.add('inactive');
    else btnRollDice.classList.remove('inactive')

}


// La fonction startRollDice déclenche le processus de lancement de dés. Elle enlève la classe "inactive" du bouton "hold" pour le rendre visible, ajoute la classe "rotate" pour animer les dés, puis appelle la fonction rollDice() après 2 secondes. Elle définit également une variable isRotating sur true et appelle la fonction changeDice() pour faire défiler les images de dés aléatoirement jusqu'à ce que isRotating soit défini sur false.

function startRollDice() {


    //  btn hold qui apparets

    btnHold.classList.remove('inactive');
    elements.classList.add('rotate');
    setTimeout(rollDice,2000);

    isRotating = true;
    
    changeDice();
    }



    // La fonction changeDice() change l'image des dés en utilisant un nombre aléatoire compris entre 1 et 6. Elle vérifie d'abord si isRotating est false, et s'arrête si c'est le cas. Elle définit ensuite resultatDes comme le nombre aléatoire généré et met à jour l'image de dés en utilisant l'attribut "src". Elle appelle ensuite elle-même après 200 millisecondes. 

    function changeDice (){

        if(!isRotating) return

        resultatDes = Math.floor(Math.random() * 6) + 1;

        elements.setAttribute("src", "images/dice" + resultatDes + ".png");
    
    setTimeout(changeDice,200)

    }


    // La fonction rollDice() termine l'animation en définissant isRotating sur false et en enlevant la classe "rotate". Elle définit ensuite la valeur du joueur actuel en fonction du tour (1 ou 2) en utilisant current1.textContent ou current2.textContent. Si resultatDes est égal à 1, la fonction appelle tourPlayer() avec l'autre joueur (1 ou 2) et affiche une notification avec showPopup().

    function rollDice() {

    isRotating = false;

    elements.classList.remove('rotate');


    if (tour == 1) {
        current1.textContent = resultatDes;
        if (resultatDes == 1) {
            tourPlayer(2);
            resultatDes = 0;
            showPopup("You draw one so lose a round.");
        }
    }
    else {
        current2.textContent = resultatDes;
        if (resultatDes == 1) {
            tourPlayer(1);
            showPopup("You draw one so lose a round.");
        }
    }
}

// La fonction hold() permet à un joueur de tenir son score actuel en ajoutant le score du jet de dé à son score total. Si le score total dépasse le score cible, la partie est terminée et une notification de gagnant est affichée. Sinon, le tour passe au joueur suivant.

function hold() {
    if (tour == 1) {
        score1 = score1 + resultatDes;
        divScore1.textContent = score1;
        if (score1 >= scoreToeach) {
            showPopup("Player 1 You are the Winner !!! Bravo !!! ");
            
            tourPlayer(0);
        }
        else tourPlayer(2);
    }
    else {
        score2 = score2 + resultatDes;
        divScore2.textContent = score2;
        if (score2 >= scoreToeach) {
            showPopup("Player 2 You are the Winner !!! Bravo !!!")
            
            tourPlayer(0);
        }
        else tourPlayer(1);
    }
}

popup.addEventListener('click', hidePopup);
btnHold.addEventListener('click', hold);
btnRollDice.addEventListener('click', startRollDice);
btnNewGame.addEventListener('click', newGame);















