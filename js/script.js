"use strict"

const pageImput = document.querySelector('.page__imput');
const pageImputLimit = pageImput.getAttribute('maxlength');
const pageCounter = document.querySelector('.page__counter span');

pageImput.addEventListener("keyup", pageSetCounter);
pageImput.addEventListener("keyDown", function (event) {
if (event.repeat) pageSetCounter();
});
function pageSetCounter() {
	const pageCounterResult = pageImputLimit - pageImput.value.length;
	pageCounter.innerHTML = pageCounterResult;
};



const pageButton = document.querySelector('.page__buton');
const pageSearch = document.querySelector('.page__search')

document.addEventListener('click', snowForm);
function snowForm(event) {
	if (event.target.closest('.page__button')) {
		pageSearch.classList.toggle('_active');
	}
	if (!event.target.closest('.page')) {
		pageSearch.classList.remove('_active');
	}
}
document.addEventListener('keyup', function (event){
	if (event.code === 'Escape') {
		pageSearch.classList.remove('_active');
	}
});