function burgerMenu() {
    const button = document.querySelector('.burger-button');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.page-header-inner')
    const links = document.querySelectorAll('.page-header-inner .nav-link');
    const close = document.querySelector('.page-header-inner .close');

    button.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    overlay.addEventListener('click', e => {
        e.preventDefault()
        toggleMenu();
    });

    close.addEventListener('click', e => {
        e.preventDefault()
        toggleMenu();
    });

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            toggleMenu();
        });
    });

    function toggleMenu() {
        menu.classList.toggle('active')

        menu.classList.contains('active') ?
            overlay.classList.toggle('active') :
            overlay.classList.toggle('active');
    }
}

burgerMenu();





