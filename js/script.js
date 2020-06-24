const work = document.getElementById('work');


const data = [
    {
        name: 'Exchange Rate Calculator',
        path: './1_form-validator',
        gitHub: '[githublink]'
    },
    {
        name: 'Movie Seat Booking',
        path: './2_movie-seat-booking',
        gitHub: '[githublink]'
    }
];

// Functions
function init() {
    data.forEach(createListItem)
}

function createListItem(item) {
    const li = document.createElement('li');

    const { name, path, gitHub } = item;
    
    li.classList.add('work-item');

    li.innerHTML = `
        <h3 class="work-headline mb2">${name}</h3>
        <a class="btn" href="${path}" target="_blank">View Work</a>
        <a class="btn" href="${gitHub} target="_blank">GitHub</a>
    `;

    work.appendChild(li);
}

// Event Listeners
window.addEventListener('load', (event) => {
    init();
});