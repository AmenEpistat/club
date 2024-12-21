let lightB = document.querySelector('.theme-button-light');
let darkB = document.querySelector('.theme-button-dark');

let sansB = document.querySelector('.font-button-sans-serif');
let serifB = document.querySelector('.font-button-serif');

let articles = document.querySelectorAll('.blog-article');

let gridB = document.querySelector('.card-view-button-grid');
let listB = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

let previews = document.querySelectorAll(".preview-list a");
let activeP = document.querySelector('.active-photo');

lightB.onclick = function(){
    document.body.classList.remove('dark');
    darkB.classList.remove('active');
    lightB.classList.add('active');
   
}
darkB.onclick = function(){
    document.body.classList.add('dark');
    lightB.classList.remove('active');
    darkB.classList.add('active');
}
sansB.onclick = function(){
    document.body.classList.remove('serif');
    sansB.classList.add('active');
    serifB.classList.remove('active');
}
serifB.onclick = function(){
    document.body.classList.add('serif');
    sansB.classList.remove('active');
    serifB.classList.add('active');
}
for (let i of articles){
    let moreB = i.querySelector('.more');
    moreB.onclick = function(){
        i.classList.remove('short');
    }
}
gridB.onclick = function(){
    cards.classList.remove('list');
    gridB.classList.add('active');
    listB.classList.remove('active');
}
listB.onclick = function(){
    cards.classList.add('list');
    gridB.classList.remove('active');
    listB.classList.add('active');
}
for (let i of previews){
    i.onclick = function(evt){
        evt.preventDefault();
        activeP.src = i.href;
        let activeI = document.querySelector('.slider .active-item');
        activeI.classList.remove('active-item');
        i.classList.add('active-item');
    };
}
