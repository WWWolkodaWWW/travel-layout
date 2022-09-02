const slider = document.querySelector('.slider'),
	prevBtn = document.querySelector('.arrow_left'),
	nextBtn = document.querySelector('.arrow_right'),
	pagination = document.querySelectorAll('.btn_pagination'),
	card = document.querySelectorAll('.card');
	// sliderImg = document.querySelectorAll();

let slide = 1;
const size = card[0].clientWidth;



// slider.style.transform = 'translateX(' + (-size * slide) + 'px)';

function slideRight() { 

	for (i = 0; i < card.length; i++) { 
		card[i].style.transform = 'translateX(' + (-size * slide) + 'px)';
	}




	card.forEach(cart => { 
		// cart.style.transform = 'translateX(' + (-size * slide) + 'px)';
		


	})
}

// function slideRight() { 
// 	card.style.left = `370px`; 
// }

// prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);
