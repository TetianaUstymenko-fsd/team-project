(() => {
    const refs = {
        // Додаємо кнопки відкриття/закриття та бекдроп
        openModalBtn: document.querySelector('[data-menu-open]'),
        closeModalBtn: document.querySelector('[data-menu-close]'),
        modal: document.querySelector('[data-menu]'),
        menuItems: document.querySelectorAll('[data-menu-item]') // Пункти меню
    };

    // Додаємо слухачі подій
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.modal.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscPress);
    
    // Закриття меню при кліку на пункт
    refs.menuItems.forEach(item => {
        item.addEventListener('click', toggleModal);
    });

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }

    function onBackdropClick(event) {
        // Закриває, якщо клікнули по бекдропу (не по самому меню)
        if (event.target === refs.modal) {
            toggleModal();
        }
    }

    function onEscPress(event) {
        // Закриває при натисканні Esc
        if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
            toggleModal();
        }
    }
})();

