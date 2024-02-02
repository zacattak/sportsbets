let bank = 100

let wager = 0

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]





function assignPlayers() {

    for (let i = 0; i < players.length; i++) {
        const p = players[i]
        p.team = 'red'

        if (Math.random() < .5) {
            p.team = 'blue'
        }
    }


}

function drawRedPlayers() {
    const redElem = document.getElementById('red')
    const redPlayers = players.filter(p => p.team == 'red')
    redPlayers.forEach(rp => redElem.innerHTML += `${rp.emoji}`)
}

function drawBluePlayers() {
    const blueElem = document.getElementById('blue')
    players.forEach(p => {
        if (p.team == 'blue') {
            blueElem.innerText += p.emoji
        }
    })
}

function handleBet(amount) {

    if (amount > bank) {
        console.error('not enough $$$$')
        return
    }

    bank -= amount
    wager += amount

    console.log('whats left in the bank?', bank)
    console.log('how much is the wager?', wager)

    updateScreen()
}

function drawWager() {
    document.getElementById('wager').innerText = '$' + wager
}
function drawBank() {
    const bankElem = document.getElementById('bank')
    bankElem.innerText = `$${bank}`
}

function startGame() {
    assignPlayers()
    drawRedPlayers()
    drawBluePlayers()
}

function updateScreen() {
    drawBank()
    drawWager()
}

startGame()
updateScreen()