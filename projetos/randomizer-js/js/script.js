const btn_randozimer = window.document.getElementById('randomizer')
btn_randozimer.addEventListener('click', randomize)
let contador = 0

function randomize(){
    const display = window.document.getElementById('random-images')
    console.log('Function randomize = true')
    let htmlcode = ''

    htmlcode += '<div class="img-slot">'
    htmlcode += `<img class="img-model" src="https://picsum.photos/200/300?random=${contador++}">`
    htmlcode += `<p class="text-img">Imagem aleatória ${contador}</p>`
    htmlcode += '</div>'

    console.log(htmlcode)
    display.innerHTML += htmlcode
    
}

