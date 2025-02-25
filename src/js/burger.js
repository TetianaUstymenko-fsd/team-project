document.addEventListener('DOMContentLoaded', () => {
	const headerWrapper = document.querySelector('.header__wrapper'),
		burgerToggle = document.querySelector('.burger');

	// Створюємо елемент оверлею
	const overlay = document.createElement('div');
	overlay.classList.add('body-overlay');
	document.body.appendChild(overlay);

	burgerToggle.addEventListener('click', () => {
		headerWrapper.classList.toggle('active');
		overlay.classList.toggle('active');
	});

	// Закривання при кліку на оверлей
	overlay.addEventListener('click', () => {
		headerWrapper.classList.remove('active');
		overlay.classList.remove('active');
	});
});
