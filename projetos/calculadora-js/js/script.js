var calc = ''
let clear = window.document.getElementById('clear')

let one = window.document.getElementById('one')
let two = window.document.getElementById('two')
let tree = window.document.getElementById('tree')
let four = window.document.getElementById('four')
let five = window.document.getElementById('five')
let six = window.document.getElementById('six')
let seven = window.document.getElementById('seven')
let eight = window.document.getElementById('eight')
let nine = window.document.getElementById('nine')
let zero = window.document.getElementById('btn-zero')

let plus = window.document.getElementById('plus')
let minus = window.document.getElementById('minus')
let multiplier = window.document.getElementById('multiplier')
let clearLast = window.document.getElementById('clearLast')
let floatNumber = window.document.getElementById('floatNumber')
let divisor = window.document.getElementById('divisor')

let equal = window.document.getElementById('btn-equal')

let display = window.document.getElementById('display')

one.addEventListener('click', insertOnDisplay)
two.addEventListener('click', insertOnDisplay)
tree.addEventListener('click', insertOnDisplay)
four.addEventListener('click', insertOnDisplay)
five.addEventListener('click', insertOnDisplay)
six.addEventListener('click', insertOnDisplay)
seven.addEventListener('click', insertOnDisplay)
eight.addEventListener('click', insertOnDisplay)
nine.addEventListener('click', insertOnDisplay)
zero.addEventListener('click', insertOnDisplay)
plus.addEventListener('click', insertOnDisplay)
minus.addEventListener('click', insertOnDisplay)
multiplier.addEventListener('click', insertOnDisplay)
back.addEventListener('click', backOne)
floatNumber.addEventListener('click', insertOnDisplay)
divisor.addEventListener('click', insertOnDisplay)

clear.onclick = function clearDisplay(){

    display.innerHTML = ''
    console.log('limpando totalmente o display...')
    calc = ''

}

function insertOnDisplay(){
    if(display.innerHTML == 0){
        display.innerHTML = ''
    }
    display.innerHTML += this.value
    console.log(`adicionando o caractere ${this.value} ao cálculo`)

        calc += this.value
  
}

function backOne(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1)
    calc = display.innerHTML
    console.log('retirando o último caractere colocado...')
}

equal.onclick = function resolve(){
    if(calc != ''){
        let resolution = eval(calc)
        console.log(`A resolução de ${calc} é ${resolution}`)
        display.innerHTML = resolution
        calc = resolution
    }
    else{
        calc = '0'
        let resolution = eval(calc)
        console.log(`A resolução de ${calc} é ${resolution}`)
        display.innerHTML = resolution
    }
}
