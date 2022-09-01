const slider = document.querySelector('.slider'),
	prevBtn = document.querySelector('.arrow_left'),
	nextBtn = document.querySelector('.arrow_right'),
	pagination = document.querySelectorAll('.btn_pagination'),
	card = document.querySelectorAll('.card');

let slide = 0;

function slideLeft() { 
	
}

function slideRight() { 
	card.style.left = `360px`; 
}

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);
