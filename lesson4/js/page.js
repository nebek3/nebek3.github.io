/*window.addEventListener('load',(event)=>{
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')          

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});*/

function changeMenu(){
    document.getElementsByClassName("menu")[0].classList.toggle("responsive")
}
