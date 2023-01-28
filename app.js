const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.controls');
const navBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('body');

function pageTransitions() {
    // Event handler for navigation buttons
    navBtn.forEach(button => {
        button.addEventListener('click', event => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            let newBtn = event.currentTarget;
            newBtn.classList.add('active-btn'); 
        });
    });

    // Event handler for section transitions
    allSections.addEventListener('click', event => {
        const btnElem = event.target.closest('.control');
        const id = btnElem.dataset.id;
        if(id) {
            // hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // show selected section
            const currentSection = document.getElementById(id);
            currentSection.classList.add('active');
        }

    });
}

pageTransitions();