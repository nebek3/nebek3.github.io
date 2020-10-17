/*window.addEventListener('load',(event)=>{
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')          

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});*/

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}
window.addEventListener('load',(event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})