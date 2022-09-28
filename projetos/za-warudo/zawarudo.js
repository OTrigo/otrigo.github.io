const btn_stop = window.document.getElementById('stop')
const display = window.document.getElementById('theworld')


btn_stop.addEventListener('click', zawarudo)

function zawarudo(){
    console.log('WRYYYYYYYYYYYYYYYYYYY')
    
    let html = ''
    
    html +=  '<video autoplay class="bg_video" id="videozawarudo">';
    html +=  '<source src="videos/theworld.mp4" type="video/mp4" id="video">';
    html +=  '</video>';

    console.log(html)

    display.innerHTML += html

    setTimeout(function() {
        freeze()
    }, 1000)    
    


}

function freeze(){
    let i
    do{
        i++
        console.log('Made In Heaven')
    }while(i!=100);

    if(i==100){
        Location.reload()
    }
}
