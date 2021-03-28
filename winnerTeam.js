// საშუალო
function calcAverage(rangersScores, fairyScores) {

    let rangersAvg = rangersScores.reduce(function(x, y) { return x + y }) / 3;
    let fairyAvg = fairyScores.reduce(function(x, y) { return x + y }) / 3;
    // გამარჯვებული
    function checkWinner(rangersTeam, fairyTeam) {
        let winner;
        if (rangersTeam > fairyTeam * 2) {
            winner = `გამარჯვებულია PowerRangers, ანგარიშით: ${rangersTeam}:${fairyTeam}`
        } else if (fairyTeam > rangersTeam * 2) {
            winner = `გამარჯვებულია FairyTails, ანგარიშით: ${fairyTeam}:${rangersTeam}`
        } else if (rangersTeam == fairyTeam) {
            winner = `თამაში ფრედ დასრულდა, ანგარიშით: ${rangersTeam}:${fairyTeam}`
        } else {
            winner = `გამარჯვებული ვერ გამოვლინდა. PowerRangers: ${rangersTeam}, fairyTeam: ${fairyTeam}`
        }
        console.log(winner)
    }

    checkWinner(rangersAvg, fairyAvg)
}

let scores = {
    powerRangers: {
        round1: [44, 23, 71],
        round2: [85, 54, 41]
    },
    fairyTails: {
        round1: [65, 54, 49],
        round2: [23, 34, 47]
    }
}

// პირველი რაუნდის ქულების მასივის წამოღება
let rangersRound1 = scores.powerRangers.round1;
let fairyRound1 = scores.fairyTails.round1;
// გამოძახება
console.log('რაუნდი 1:')
calcAverage(rangersRound1, fairyRound1)

// მეორე რაუნდის ქულების მასივის წამოღება
let rangersRound2 = scores.powerRangers.round2;
let fairyRound2 = scores.fairyTails.round2;
// გამოძახება
console.log('რაუნდი 2:')
calcAverage(rangersRound2, fairyRound2)