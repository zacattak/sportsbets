let bank = 100

let wager = 0

const players = [
    {
        name: "D'Marcus Williums",
        team: '',
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        team: '',
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        team: '',
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        team: '',
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        team: '',
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        team: '',
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        team: '',
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        team: '',
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        team: '',
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        team: '',
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        team: '',
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        team: '',
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        team: '',
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        team: '',
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        team: '',
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        team: '',
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        team: '',
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        team: '',
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        team: '',
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        team: '',
        emoji: '🐅',
        skill: 100
    },
]



function assignPlayers() {
    let player = players.length
    players.forEach(player => player.team = Math.random() > .5 ? 'red' : 'blue')

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

function handleBet() {

    if (wager > bank) {
        console.error('not enough $$$$')
        return
    }

    bank -= wager
    wager += wager

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

// test