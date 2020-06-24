const work = document.getElementById('work');

const gitHubMaster = 'https://github.com/JusticeAmpofo/web-projects/tree/master/';


const data = [
    {
        name: 'Form Validator',
        path: './1_form-validator',
        gitHub: `${gitHubMaster}1_form-validator`
    },
    {
        name: 'Movie Seat Booking',
        path: './2_movie-seat-booking',
        gitHub: `${gitHubMaster}2_movie-seat-booking`
    },
    {
        name: 'Custom Video Player',
        path: './3_custom-video-player',
        gitHub: `${gitHubMaster}3_custom-video-player`
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
        <a class="btn" href="${gitHub}" target="_blank">GitHub</a>
    `;

    work.appendChild(li);
}

// Event Listeners
window.addEventListener('load', (event) => {
    init();
});