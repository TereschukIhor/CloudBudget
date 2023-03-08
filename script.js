/////////////// Scheme ///////////////
const lightStyles = document.querySelector('#lightStyles');
const darkStyles = document.querySelector('#darkStyles');
const lightBtn = document.querySelector('.icon-light-theme');
const autoBtn = document.querySelector('.icon-auto-theme');
const darkBtn = document.querySelector('.icon-dark-theme');

/////////////// local storage ///////////////
if (localStorage.getItem('scheme') == null) {
    lightStyles.media = '(prefers-color-scheme: light)';
    darkStyles.media = '(prefers-color-scheme: dark)';
    autoBtn.checked = true;
} else {
    if ((localStorage.getItem('scheme') == 'dark')) {
        lightStyles.media = 'not all';
        darkStyles.media = 'all';
        darkBtn.checked = true;
    } else {
        lightStyles.media = 'all';
        darkStyles.media = 'not all';
        lightBtn.checked = true;
    }
}

/////////////// btns click ///////////////
autoBtn.addEventListener('click', () => {
    if (localStorage.getItem('scheme') !== null) {
        localStorage.removeItem('scheme');
        lightStyles.media = '(prefers-color-scheme: light)';
        darkStyles.media = '(prefers-color-scheme: dark)';
    }
})

lightBtn.addEventListener('click', () => {
    if (localStorage.getItem('scheme') == null) {
        localStorage.setItem('scheme', 'light');
        lightStyles.media = 'all';
        darkStyles.media = 'not all';
    } else if (localStorage.getItem('scheme') == 'dark') {
        localStorage['scheme'] = 'light';
        lightStyles.media = 'all';
        darkStyles.media = 'not all';
    }
})

darkBtn.addEventListener('click', () => {
    if (localStorage.getItem('scheme') == null) {
        localStorage.setItem('scheme', 'dark');
        lightStyles.media = 'not all';
        darkStyles.media = 'all';
    } else if (localStorage.getItem('scheme') == 'light') {
        localStorage['scheme'] = 'dark';
        lightStyles.media = ' not all';
        darkStyles.media = 'all';
    }
})



/////////////// Menu ///////////////
/////////////// showMenu ///////////////
const body = document.querySelector('body');
const menuNav = document.querySelector('.menu-nav');
const menuBtn = document.querySelector('.menu-btn__actions');

menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('_show-menu');
    menuBtn.classList.toggle('_line-chenge');
    body.classList.toggle('_lock')
})


/////////////// showHeader ///////////////
const mainBlockHeight = document.querySelector('.main-block').clientHeight;
const header = document.querySelector('.header');

if (window.pageYOffset > mainBlockHeight) {
    header.classList.add('_showHeader');
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 10 && header.classList.contains('_showHeader')) {
        header.classList.remove('_showHeader');
    }
    else if (window.pageYOffset > mainBlockHeight) {
        header.classList.add('_showHeader');
    }
})


/////////////// mediaWidth ///////////////
const mediaMinWidth768 = window.matchMedia("(min-width: 768px)");
const mediaMaxWidth768 = window.matchMedia("(max-width: 768px");
const mediaMaxWidth500 = window.matchMedia("(max-width: 500px)");
const headerActions = document.querySelector('.actions-header');
const mobileBody = document.querySelector('.menu-actions');
const signInBtn = document.querySelector('.sign-in__actions');
const schemeHeader = document.querySelector('.scheme')

if (mediaMaxWidth500.matches) {
    mobileBody.insertAdjacentElement('afterbegin', schemeHeader);
    mobileBody.insertAdjacentElement('afterbegin', signInBtn);
} else {
    headerActions.insertAdjacentElement('afterbegin', signInBtn);
    headerActions.insertAdjacentElement('afterbegin', schemeHeader);
}

window.addEventListener('resize', () => {
    if (mediaMinWidth768.matches) {
        if (menuNav.classList.contains('_show-menu')) {
            menuNav.classList.remove('_show-menu');
            menuBtn.classList.remove('_line-chenge');
            body.classList.toggle('_lock');
            headerActions.insertAdjacentElement('afterbegin', signInBtn);
            headerActions.insertAdjacentElement('afterbegin', schemeHeader);
        } else {
            headerActions.insertAdjacentElement('afterbegin', signInBtn);
            headerActions.insertAdjacentElement('afterbegin', schemeHeader);
        }
    } else if (mediaMaxWidth768.matches) {
        if (mediaMaxWidth500.matches) {
            mobileBody.insertAdjacentElement('afterbegin', schemeHeader);
            mobileBody.insertAdjacentElement('afterbegin', signInBtn);
        } else {
            headerActions.insertAdjacentElement('afterbegin', signInBtn);
            headerActions.insertAdjacentElement('afterbegin', schemeHeader);
        }
    }
})
