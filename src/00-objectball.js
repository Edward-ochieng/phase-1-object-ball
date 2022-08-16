function gameObject(){
    const newObject = {
        home: {
            teamName: 'Brooklyn Nets', 
            colors: ['Black, White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assits:12,
                    steals:3,
                    blocks:3,
                    slamDunks:1,
                },
                'Regie Evans': {
                    number:30 ,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assits:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                'Brook Lopez': {
                    number:11 ,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assits:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                'Mason Plumlee': {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assits:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                'Jason Terry': {
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assits:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            },
        }, 
        away: {
            teamName:'Charlotte Hornets',
            colors: ['Turquoise, Purple'],
            players: {
                'Jeff Ariden': {
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assits:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                }, 'Bismark Biyombo': {
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assits:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                }, 'Desanga Diop': {
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assits:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                }, 'Ben Gordon': {
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assits:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                }, 'Brendan Haywood': {
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assits:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
                
            },
        }
    }

    return newObject;
}

function numPointsScored (playerName) {
    const obj = gameObject();
    const home = obj.home;
    const away = obj.away;
    let foundPoints;
    for (const k in home.players) {
        if(k === playerName){
            foundPoints = home.players[k].points
        }
    }
    for (const k in away.players) {
        if(k === playerName){
            foundPoints = away.players[k].points
        }
    }
    return foundPoints;
}

function shoeSize(playerName){
    const obj = gameObject();
    const home = obj.home;
    const away = obj.away;
    let foundsize;
    for(const s in home.players) {
        if(s === playerName){
            foundsize = home.players[s].shoe
        }
    }
    for(const s in away.players){
        if(s === playerName){
            foundsize = away.players[s].shoe
        }
    }
    return foundsize;
}
function teamColors(teamName){
    const obj = gameObject();
    let colors;
    for (const a in obj){
        if(obj[a].teamName === teamName){
            colors = obj[a].colors;
        }
    }
    return colors;
}
function teamNames(){
    const obj = gameObject();
    let names = [];
    for (const a in obj){
        names.push(obj[a].teamName);
    }
    return names
}

function playerNumbers(teamName){
    const obj = gameObject();
    let numbers = [];
    for(const a in obj){
        if(obj[a].teamName === teamName){
            for (const b in obj[a].players){
                numbers.push(obj[a].players[b].number);
            }
        }
    }
    return numbers;
}

function playerStats(playerName){
    const obj = gameObject();
    const home = obj.home;
    const away = obj.away;
    let stat;
    for(const s in home.players) {
        if(s === playerName){
            stat = home.players[s]
        }
    }
    for(const s in away.players){
        if(s === playerName){
            stat= away.players[s]
        }
    }
    return stat;
}

function bigShoeRebounds(){
    const obj = gameObject();
    const home = obj.home;
    const away = obj.away;
    let shoes = [];
    for(const s in home.players) {
        shoes.push(home.players[s].shoe);
    }
    for(const s in away.players){
        shoes.push(away.players[s].shoe);
    }
    const sortedShoes = shoes.sort((a, b) => b - a);
    let rebound;
    for (const c in home.players){
        if(home.players[c].shoe === sortedShoes[0]){
            rebound = home.players[c].rebounds;
        }
    }
    for (const c in away.players){
        if(away.players[c].shoe === sortedShoes[0]){
            rebound = away.players[c].rebounds;
        }
    }
    return rebound;
}

function mostPointsScored () {
    const obj = gameObject();
    const home = obj.home;
    const away = obj.away;
    let scores = [];
    for(const s in home.players) {
        scores.push(home.players[s].points);
    }
    for(const s in away.players){
        scores.push(away.players[s].points);
    }
    const sortedScores = scores.sort((a, b) => b - a);
    let playerName;
    for (const c in home.players){
        if(home.players[c].points === sortedScores[0]){
            playerName = c;
        }
    }
    for (const c in away.players){
        if(away.players[c].points === sortedScores[0]){
            playerName = c;
        }
    }
    return playerName;
}

console.log(mostPointsScored());






