//Js
window.onload = function() {
    const box = document.querySelector('.box');
    const txt = document.querySelector('.txt');
    
    txt.addEventListener('transitionstart', function(){
        txt.innerHTML = 'Be inspired';
    });
    txt.addEventListener('transitionend', function(){
        txt.innerHTML = 'programming is like writing a book....except when you miss a single comma on line 119 the whole thing makes No sence "<br>Talaso susan" &#10084';
        box.style.backgroundColor = '#ff6699';
        
    });
    txt.addEventListener('transitioncancel', function(){
        txt.innerHTML = 'hi!';
    });
    
};ss