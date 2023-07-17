let currentGame = []
let games = []
let sets = []
let winner = false
let pointsp1 = [0,0,0,0,0]
let pointsp2 = [0,0,0,0,0]
let pointsCounterP1 = 1;
let pointsCounterP2 = 1;
let winnerGame =  "";
let cuenta= 1;

const playPoint = () => Math.floor(Math.random() * 2) + 1;

/*
const analizeGame = () => {
    currentGame.forEach(element => {
        if(element === 1){
            points[0] += 1
            console.log(points)

        }else{
            points[1] += 1
            console.log(points)
        }
    });
*/


const analizeGame = () => {
    currentGame.forEach(element => {
        console.log("jugada: ", cuenta)
        cuenta += 1
        if(element === 1){
            setPointsP1(pointsCounterP1);
            pointsCounterP1 += 1;
        }else{
            setPointsP2(pointsCounterP2);
            pointsCounterP2 += 1;
        }
    });

    if((pointsp1[3] === "Adv"  && pointsp2[2] === 0) || (pointsp1[4] === "Adv+"  && pointsp2[3] === 0) && (pointsp1[4] === "Adv++"  && pointsp2[3] === "Adv")) {
        setWinnerGame("P1");
    }
    
    if((pointsp2[3] === "Adv"  && pointsp1[2] === 0) || (pointsp2[3] === "Adv+"  && pointsp1[3] === 0) &&  (pointsp2[4] === "Adv++"  && pointsp1[3] === "Adv")) {
        setWinnerGame("P2");
    }

    return analizeSets()
}

function setWinnerGame(whoWin) {
    winnerGame = whoWin;
    console.log(`el ganador del game es ${winnerGame}`)
    games.push(winnerGame)
    console.log(games)
    pointsp1 = [0,0,0,0,0]
    pointsp2 = [0,0,0,0,0]
    pointsCounterP1 = 1;
    pointsCounterP2 = 1;
}

function setPointsP1(pointsCounter) {
    switch (pointsCounter) {
        case 1: 
            pointsp1[0] = 15  
            break;
        case 2: 
            pointsp1[1] = 30
            break;
        case 3:
            pointsp1[2] = 40
            break;
        case 4: 
            pointsp1[3] = "Adv"
            break;
        default:
            pointsp1[4] = pointsp1[4] === 0 ? "Adv+" : "Adv++"
            break;
    }
    console.log("player 1", pointsp1);
    console.log("player 2", pointsp2)
}

function setPointsP2(pointsCounter) {
    switch (pointsCounter) {
        case 1: 
            pointsp2[0] = 15  
            break;
        case 2: 
            pointsp2[1] = 30
            break;
        case 3:
            pointsp2[2] = 40
            break;
        case 4: 
            pointsp2[3] = "Adv"
            break;
        default:
            pointsp2[4] = pointsp2[4] === 0 ? "Adv+" : "Adv++"
            break;
    }
    console.log("player 1", pointsp1)
    console.log("player 2", pointsp2)
}

const analizeSets = () => {
    const gamesWinnedByP1 = games.filter((element) => {
        return element === "P1";
    });

    const gamesWinnedByP2 = games.filter((element) => {
        return element === "P2";
    });

    if(gamesWinnedByP1.length >= 6 || gamesWinnedByP2.length >= 6){
        let winnerSet = (gamesWinnedByP1.length >= 6)? "P1" : "P2"
        console.log("El ganador del set es " + winnerSet)
        console.log("P1          P2")
        console.log(gamesWinnedByP1.length + "          " + gamesWinnedByP2.length)
        return true
    }

    return false;

}



const play = (winner) => {
    
    try {
        if(winner === true){
            return true
        }
    
        currentGame.push(playPoint())
        winner = analizeGame()

        play(winner)

    } catch (error) {
        console.log("ha ocurrido un error: " + error)
        
    }

}


(function(){
    try {
        play(false);    
    } catch (error) {
        console.log(error)
    }
    
})()

