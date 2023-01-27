const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.controls');
const navBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('body');

function pageTransitions() {
    navBtn.forEach(button => {
        button.addEventListener('click', event => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            let newBtn = event.currentTarget;
            newBtn.classList.add('active-btn'); 
        });
    });
}

pageTransitions();