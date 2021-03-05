'use strict';

const catalogPlus = document.querySelector('.catalog-plus'),
	menu = document.querySelector('.menu-products'),
	servicesItemCards = document.querySelectorAll('.services-item'),
	buttonsTab = document.querySelectorAll('.services-navigation button'),
	searchInHeader = document.querySelector('.search'),
	buttonSearch = document.querySelector('.btn-search'),
	slide = document.querySelectorAll('.slider-item'),
	buttonSlide = document.querySelectorAll('.button-slide'),
	openContactPopup = document.querySelector('.open-modal'),
	writeUs = document.querySelector('.write-us'),
	closeWriteUs = document.querySelector('.close-write-us'),
	map = document.querySelector('.map-link'),
	mapPopup = document.querySelector('.map'),
	closeMap = document.querySelector('.close-map');

catalogPlus.addEventListener('mouseenter', function(){
	menu.classList.remove('hidden');
});
catalogPlus.addEventListener('mouseleave', function(){
	menu.classList.add('hidden');
});
menu.addEventListener('mouseleave', function(){
	menu.classList.add('hidden');
});
menu.addEventListener('mouseenter', function(){
	menu.classList.remove('hidden');
});


map.addEventListener('click', function(){
	mapPopup.classList.remove('hidden');
});

closeMap.addEventListener('click', function(){
	mapPopup.classList.add('hidden');
});

openContactPopup.addEventListener('click', function(){
	writeUs.classList.remove('hidden');
});

closeWriteUs.addEventListener('click', function(){
	writeUs.classList.add('hidden');
});


for(let i=0; i<buttonsTab.length; i++){
	if(i==0 || i==3 || i==6){
		buttonsTab[i].addEventListener('click', function(){
			servicesItemCards[0].classList.remove('hidden');
			servicesItemCards[1].classList.add('hidden');
			servicesItemCards[2].classList.add('hidden');
		});
	}
	if(i==1 || i==4 || i==7){
		buttonsTab[i].addEventListener('click', function(){
			servicesItemCards[0].classList.add('hidden');
			servicesItemCards[1].classList.remove('hidden');
			servicesItemCards[2].classList.add('hidden');
		});
	}
	if(i==2 || i==5 || i==8){
		buttonsTab[i].addEventListener('click', function(){
			servicesItemCards[0].classList.add('hidden');
			servicesItemCards[1].classList.add('hidden');
			servicesItemCards[2].classList.remove('hidden');
		});
	}
}



for(let i=0; i<buttonSlide.length; i++){
	if(i==0 || i==3 || i==6){
		buttonSlide[i].addEventListener('click', function(){
			slide[0].classList.remove('hidden');
			slide[1].classList.add('hidden');
			slide[2].classList.add('hidden');
			for(let j=0; j<buttonSlide.length; j++){
				buttonSlide[j].classList.remove('button-slide-active')
			}
			buttonSlide[0].classList.add('button-slide-active');
			buttonSlide[3].classList.add('button-slide-active');
			buttonSlide[6].classList.add('button-slide-active');
		});
	}
	if(i==1 || i==4 || i==7){
		buttonSlide[i].addEventListener('click', function(){
			slide[0].classList.add('hidden');
			slide[1].classList.remove('hidden');
			slide[2].classList.add('hidden');
			for(let j=0; j<buttonSlide.length; j++){
				buttonSlide[j].classList.remove('button-slide-active')
			}
			buttonSlide[1].classList.add('button-slide-active');
			buttonSlide[4].classList.add('button-slide-active');
			buttonSlide[7].classList.add('button-slide-active');
		});
	}
	if(i==2 || i==5 || i==8){
		buttonSlide[i].addEventListener('click', function(){
			slide[0].classList.add('hidden');
			slide[1].classList.add('hidden');
			slide[2].classList.remove('hidden');
			for(let j=0; j<buttonSlide.length; j++){
				buttonSlide[j].classList.remove('button-slide-active')
			}
			buttonSlide[2].classList.add('button-slide-active');
			buttonSlide[5].classList.add('button-slide-active');
			buttonSlide[8].classList.add('button-slide-active');
		});
	}
}



searchInHeader.oninput = function(){
	buttonSearch.classList.remove('hidden');
	if(searchInHeader.value===''){
		buttonSearch.classList.add('hidden');
	}
}