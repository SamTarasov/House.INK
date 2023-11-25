const btnForOpenGaleriaFrance = document.getElementById("country_item_france");
const btnForOpenGaleriaAlemania = document.getElementById("country_item_alemania");
const btnForOpenGaleriaEngland = document.getElementById("country_item_england");


const MenuOpenFrance = document.getElementById('galeria_france');
const MenuOpenAlemania = document.getElementById('galeria_alemania');
const MenuOpenEngland = document.getElementById('galeria_england');


btnForOpenGaleriaFrance.addEventListener('click', function(e){
    e.preventDefault(); 
    MenuOpenFrance.style.display = 'grid';
    MenuOpenAlemania.style.display = 'none';
    MenuOpenEngland.style.display = 'none';

    btnForOpenGaleriaFrance.classList.add('country_item_active');
    btnForOpenGaleriaAlemania.classList.remove('country_item_active');
    btnForOpenGaleriaEngland.classList.remove('country_item_active');
});


btnForOpenGaleriaAlemania.addEventListener('click', function(e){
    e.preventDefault(); 
    MenuOpenFrance.style.display = 'none';
    MenuOpenAlemania.style.display = 'grid';
    MenuOpenEngland.style.display = 'none';

    btnForOpenGaleriaFrance.classList.remove('country_item_active');
    btnForOpenGaleriaAlemania.classList.add('country_item_active');
    btnForOpenGaleriaEngland.classList.remove('country_item_active');
    
});


btnForOpenGaleriaEngland.addEventListener('click', function(e){
    e.preventDefault(); 
    MenuOpenFrance.style.display = 'none';
    MenuOpenAlemania.style.display = 'none';
    MenuOpenEngland.style.display = 'grid';


    btnForOpenGaleriaFrance.classList.remove('country_item_active');
    btnForOpenGaleriaAlemania.classList.remove('country_item_active');
    btnForOpenGaleriaEngland.classList.add('country_item_active');
});



const btnForOpenMenu = document.getElementById('btnForOpenMenu414');
const btnForCloseMenu = document.getElementById('btnForCloseMenu414');

const nav414Menu = document.getElementById('nav_414_bot_menu');
const nav414Bot = document.getElementById('nav_414_bot');

btnForOpenMenu.addEventListener('click', function(){
    nav414Menu.style.display = 'flex';
    nav414Bot.style.display = 'none';
})


btnForCloseMenu.addEventListener('click', function(){
    nav414Menu.style.display = 'none';
    nav414Bot.style.display = 'flex';
})
