let currentGame = []
let games = []
let sets = []
let winner = false
const points = [0,0]

console.log(points)

const playPoint = () => Math.floor(Math.random() * 2) + 1;

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

    if(points[0] > 5 || points[1] > 5){
        currentGame = []
        
        let winnerGame = (points[0] > 5)? "P1" : "P2"
        console.log(`el ganador del game es ${winnerGame}`)
        games.push(winnerGame)
        console.log(games)

        points[0] = 0;
        points[1] = 0;
        return analizeSets()
    }

    return false;

}

const analizeSets = () => {
    const gamesWinnedByP1 = games.filter((element) => {
        return element === "P1";
    });

    const gamesWinnedByP2 = games.filter((element) => {
        return element === "P2";
    });

    if(gamesWinnedByP1.length >= 4 || gamesWinnedByP2.length >= 4){
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
