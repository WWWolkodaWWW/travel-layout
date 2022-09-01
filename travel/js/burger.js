const burger = document.querySelector('.header__burger'),
	navigation = document.querySelector('.navigation'),
	headerNav = document.querySelector('.header__navigation'),
	navLinks = document.querySelectorAll('.navigation li a');

function toggleMenu() {
	burger.classList.toggle('open');
	headerNav.classList.toggle('open');

	navLinks.forEach(link => { 
		link.addEventListener('click', () => { 
			if (headerNav.classList.contains('open')) { 
				headerNav.classList.remove('open');
				burger.classList.remove('open');

				navLinks.forEach(link => { 
					link.style.animation = `navLinkFade 1s ease forwards`;
				})
			}
		})
	})
}

burger.addEventListener('click', toggleMenu);