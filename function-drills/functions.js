let pikachuHp = 100
let pikachuAttack = 30

let shieldonHp = 120
let shieldonAttack = 120



// returns a Boolean: true if defender survives attack from attacker
function isAlive(defenderHp) {


    if (defenderHp > 0){
    return true
} else {
    return false
}
}

if (isAlive(pikachuHp, shieldonAttack)){
    console.log('Pikachu lives!')
} else {
    console.log('Pikachu is no more.')
}

const attack = (defenderHp, attackerAttack) => defenderHp - attackerAttack
const diceRollMaker = () => Math.floor(Math.random() * 6 + 1)
const diceRoll = diceRollMaker()


for (let i = 0; i < diceRoll; i++) {
    console.log('Shieldon attacks Pikachu!')
    if (isAlive(pikachuHp)) {
        pikachuHp = attack(pikachuHp, shieldonAttack)
        console.log('Pikachu HP at ' + pikachuHp)
    } else {
        break;
    }
}

if (isAlive(pikachuHp)){
    console.log('Pikachu wins')
}else {
    console.log('Shieldon has won.')
}