const interval = 3000;
let banner = window.document.getElementById('banner')
let init = window.onload

init = slide1()

function slide1(){
    banner.src = "../images/banner-index/banner2.jpg"
    setTimeout("slide2()", interval)
}

function slide2(){
    banner.src = "../images/banner-index/banner3.jpg"
    setTimeout("slide3()",interval)
}

function slide3(){
    banner.src = "../images/banner-index/banner1.jpg"
    setTimeout("slide1()", interval)
}