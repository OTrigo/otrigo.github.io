const btn_start = window.document.getElementById('start')
const btn_reset = window.document.getElementById('stop')
const displayTimer = window.document.getElementById('timer_id')
let hour = 0
let minute = 0
let second = 0

let displayHour = 0
let displayMinute = 0
let displaySecond = 0

let interval = null
let status = "stopped"

function clickStartStop() {
    if(status==="stopped"){
        window.document.getElementById('start').innerHTML = 'Parar'
        interval = window.setInterval(counting, 1000)
        status = "started"
        console.log(`status:${status}`)
    }

    else{
        document.getElementById('start').innerHTML = "Começar"
        status = "stopped"
        window.clearInterval(interval)
        console.log(`status:${status}`)
    }
}

function counting(){
    second++

    if(second/60===1){
        minute++
        second = 0
    }
    if(minute/60===1){
        hour++
        minute = 0
    }

    second<10||second===0? displaySecond= '0'+ second : displaySecond = second
    minute<10||minute===0? displayMinute= '0'+ minute : displayMinute = minute
    hour<10||hour===0? displayHour= '0'+ hour : displayHour = hour

    displayTimer.innerHTML = `${displayHour}:${displayMinute}:${displaySecond}`
}

function reset(){
    hour = 0
    minute = 0
    second = 0
    window.clearInterval(interval)
    status = 'started'
    displayTimer.innerHTML = '00:00:00'
}