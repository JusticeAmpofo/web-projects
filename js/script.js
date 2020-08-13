const work = document.getElementById('work');
const loader = document.getElementById('loader');

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
    },
    {
        name: 'Exchange Rate Calculator',
        path: './4_Exchange Rate Calculator',
        gitHub: `${gitHubMaster}4_Exchange Rate Calculator`
    },
    {
        name: 'Dom Array Methods',
        path: './5_dom-array-methods',
        gitHub: `${gitHubMaster}5_dom-array-methods`
    },
    {
        name: 'Modal Menu Slider',
        path: './6_modal-menu-slider',
        gitHub: `${gitHubMaster}6_modal-menu-slider`
    },
    {
        name: 'Hangman',
        path: './7_hangman',
        gitHub: `${gitHubMaster}7_hangman`
    },
    {
        name: 'Meal Finder',
        path: './8_meal-finder',
        gitHub: `${gitHubMaster}8_meal-finder`
    },
    {
        name: 'Expense Tracker',
        path: './9_expense-tracker',
        gitHub: `${gitHubMaster}9_expense-tracker`
    },
    {
        name: 'Music Player',
        path: './10_music-player',
        gitHub: `${gitHubMaster}10_music-player`
    },
    {
        name: 'Infinite Scroll Blog',
        path: './11_infinite_scroll_blog',
        gitHub: `${gitHubMaster}11_infinite_scroll_blog`
    },
    {
        name: 'Typing Game',
        path: './12_typing-game',
        gitHub: `${gitHubMaster}12_typing-game`
    },
    {
        name: 'Speech Text Reader',
        path: './13_speech-text-reader',
        gitHub: `${gitHubMaster}13_speech-text-reader`
    },
    {
        name: 'Memory Cards',
        path: './14_memory-cards',
        gitHub: `${gitHubMaster}14_memory-cards`
    },
    {
        name: 'Lyrics Search',
        path: './15_lyrics-search',
        gitHub: `${gitHubMaster}15_lyrics-search`
    },
    {
        name: 'Relaxer App',
        path: './16_relaxer-app',
        gitHub: `${gitHubMaster}16_relaxer-app`
    },
    {
        name: 'Breakout Game',
        path: './17_breakout-game',
        gitHub: `${gitHubMaster}17_breakout-game`
    },
    {
        name: 'New Year Countdown',
        path: './18_new-year-countdown',
        gitHub: `${gitHubMaster}18_new-year-countdown`
    },
    {
        name: 'Sortable List',
        path: './19_sortable-list',
        gitHub: `${gitHubMaster}19_sortable-list`
    },
    {
        name: 'Speak Number Guess Game',
        path: './20_speak-number-guess',
        gitHub: `${gitHubMaster}20_speak-number-guess`
    }
];

// Functions
function init() {
    data.forEach(createListItem);
    loader.style.display = "none";
    work.style.display = "block";
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