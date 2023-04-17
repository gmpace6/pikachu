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

