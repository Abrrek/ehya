var menuBatton = document.querySelector('.menu-button')
menuBatton.addEventListener('click', function(){
console.log('Клик по кнопке меню')
document.querySelector('.navbar__block').classList.toggle('navbar__block--visible');

});