let pikachuHp= 100

// turns pikachuHp from a number into a string
pikachuHp = String(pikachuHp)
    
let shieldonHp = 120

let theWinnerIs = 'The winner is: Pikachu!'

theWinnerIs.replace('Pikachu', 'Shieldon')

// console.log(theWinnerIs)

if (theWinnerIs.includes('Pikachu')){
    console.log('Pikachus is epic!')
  }  else{
        console.log('pikachus dies')
    }
let kebabCase = theWinnerIs.replace(':','')
kebabCase = kebabCase.replace('!','')
kebabCase = kebabCase.toLowerCase()

// way 1
// kebabCase = kebabCase.replaceAll(' ',"-")
// console.log(kebabCase)

// way 2
// let kebabCaseWordArray = kebabCase.split(' ')
// kebabCaseWordArray = kebabCaseWordArray.join('-')
// console.log(kebabCaseWordArray)
