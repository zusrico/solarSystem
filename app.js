
const planets = document.querySelector('.planet-cards-container');
const buttonLeft = document.getElementsByTagName('button')[0];
const buttonRight = document.getElementsByTagName('button')[1];
const planet = document.querySelector('.planet-card');


//hacer que el scroll se mueva al elemento anterior en caso de estar exactamente encima de un planeta
//en caso contrario que se ajuste al inicio del planeta sobre el que está
buttonLeft.addEventListener('click', function(){
    const widthWindow = window.innerWidth;
    const scrollLeft = planets.scrollLeft;

    //calculamos cuanto nos hemos pasado 
    const scrollLeftRest = scrollLeft % widthWindow;

    if(scrollLeftRest == 0){
        planets.scrollLeft -= widthWindow;
    }else{
        planets.scrollLeft -= scrollLeftRest;
    }   
}); 

//hacer que el scroll se mueva al siguiente elemento en caso de que el scroll no sea multiplo del ancho de la ventana
//en caso de estar sobre el último planeta, que se desplace al primero
buttonRight.addEventListener('click', function(){ 
    const widthWindow = window.innerWidth;
    const scrollLeft = planets.scrollLeft;

    if(planets.scrollLeft >= (widthWindow * 8)){
        planets.scrollLeft = 0;
    }else{
        const scrollLeftRest = scrollLeft % widthWindow;
        const scrollLeftNext = widthWindow - scrollLeftRest;

        planets.scrollLeft += scrollLeftNext;
    }

}); 


buttonRight.addEventListener("mouseover", function(){
    buttonLeft.style.display = 'none';
}); 

buttonRight.addEventListener("mouseout", function(){
    buttonLeft.style.display = 'block';
});

buttonLeft.addEventListener("mouseover", function(){
    buttonRight.style.display = 'none';
});

buttonLeft.addEventListener("mouseout", function(){
    buttonRight.style.display = 'block';
});

//desplazar el scroll al principio en caso de que se redimensione la ventana
window.addEventListener("resize", function(){
        planets.scrollLeft = 0;
});





window.addEventListener("scroll", handleScroll);

const navBar = document.getElementsByTagName('nav')[0];
let prevScrollPos = 0;

function handleScroll(){
    const currentScrollPos = window.scrollY;


    if(prevScrollPos > currentScrollPos){
        navBar.style.transform = 'translateY(0%)';
    }else{
        navBar.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;

}

