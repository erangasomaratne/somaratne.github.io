const body=document.querySelector('body');
const color1=document.querySelector('#color1');
const color2=document.querySelector('#color2');

function changeBackground(){
	body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input',()=>{
	changeBackground();
});

color2.addEventListener('input', ()=>{
	changeBackground();
});