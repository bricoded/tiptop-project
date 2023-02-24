let hiddenPara = document.querySelector('section#FAQs .btn-holder button div + p');
let plus = document.querySelector('section#FAQs .btn-holder button div i');
let colorChange = document.querySelector('section#FAQs .btn-holder button div p');

function myShow(){
    hiddenPara.classList.toggle('show');
    plus.classList.toggle('rotate');
    colorChange.classList.toggle('color');
}

let hiddenPara2 = document.querySelector('section#FAQs .btn-holder button:nth-child(2) div + p');
let plus2 = document.querySelector('section#FAQs .btn-holder button:nth-child(2) div i');
let colorChange2 = document.querySelector('section#FAQs .btn-holder button:nth-child(2) div p');2

function myShow2(){
    hiddenPara2.classList.toggle('show');
    plus2.classList.toggle('rotate');
    colorChange2.classList.toggle('color');
}

let hiddenPara3 = document.querySelector('section#FAQs .btn-holder button:nth-child(3) div + p');
let plus3 = document.querySelector('section#FAQs .btn-holder button:nth-child(3) div i');
let colorChange3 = document.querySelector('section#FAQs .btn-holder button:nth-child(3) div p');2

function myShow3(){
    hiddenPara3.classList.toggle('show');
    plus3.classList.toggle('rotate');
    colorChange3.classList.toggle('color');
}

let hiddenPara4 = document.querySelector('section#FAQs .btn-holder button:nth-child(4) div + p');
let plus4 = document.querySelector('section#FAQs .btn-holder button:nth-child(4) div i');
let colorChange4 = document.querySelector('section#FAQs .btn-holder button:nth-child(4) div p');

function myShow4(){
    hiddenPara4.classList.toggle('show');
    plus4.classList.toggle('rotate');
    colorChange4.classList.toggle('color');
}

let hiddenPara5 = document.querySelector('section#FAQs .btn-holder button:nth-child(5) div + p');
let plus5 = document.querySelector('section#FAQs .btn-holder button:nth-child(5) div i');
let colorChange5 = document.querySelector('section#FAQs .btn-holder button:nth-child(5) div p');

function myShow5(){
    hiddenPara5.classList.toggle('show');
    plus5.classList.toggle('rotate');
    colorChange5.classList.toggle('color');
}


function chngIcon(){
    var img = document.getElementById('bars').src;

    if (img.indexOf('/tiptop_files/bars.svg')!=-1){
        document.getElementById('bars').src = './tiptop_files/close-bars.svg';
    }
    else{
        document.getElementById('bars').src = './tiptop_files/bars.svg';
    }

}

const hamburger = document.getElementById('bars');
const mobileMenu =  document.querySelector('nav .nav-links');
const menuItem =  document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
    })
})

function mute(){
    document.querySelector('video.hero.one').toggleAttribute('muted');
    var sound = document.querySelector('img.mute').src;

    if (sound.indexOf('/tiptop_files/mute.svg')!=-1){
        document.querySelector('img.mute').src = './tiptop_files/unmute.svg';
    }
    else{
        document.querySelector('img.mute').src = './tiptop_files/mute.svg';
    }
}

function block(){
    document.querySelector('div.pop-up').classList.toggle('block');
}