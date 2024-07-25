//Dropdown
const containerDropDown = document.querySelector(".language-dropdown");
const languageSelectButton = document.querySelector(".language-drop__button");
const languageContent = document.querySelector(".language-drop__content");
const languageButton = document.querySelectorAll(".language-drop__content a");
const languageArrow = document.querySelector('.language__arrow');
const selectedLanguage = document.querySelector(".selected__language");

//Menu User
const menuUser = document.querySelector(".header__menu__user");
const menuUserContent = document.querySelector('.header__user__content');
const menuElement = document.querySelectorAll('.menu__element');

//aside menu
const womanMenu = document.querySelector(".woman__menu");
const manMenu = document.querySelector(".man__menu");
const womanSecondaryMenu = document.querySelector(".woman__menu__navigation");
const manSecondaryMenu = document.querySelector(".man__menu__navigation");

// Timer
const timeDaySelector = document.querySelector(".time__day");
const timeHoursSelector = document.querySelector(".time__hours");
const timeMinutesSelector = document.querySelector(".time__minutes");
const timeSecondsSelector = document.querySelector(".time__seconds");

// function for dropdown
containerDropDown.onclick = () => {
    languageArrow.classList.toggle("active")
}

languageSelectButton.onclick = () => {
    languageContent.style.display = languageContent.style.display === "flex" ? "none" : "flex";
}

languageButton.forEach(element => {
    element.onclick = (event)  => {
       const changeLanguage= event.target.textContent;
       selectedLanguage.textContent  = changeLanguage;

       if (!containerDropDown.contains(event.target)) {
           languageContent.style.display = "flex"
       } else {
           languageContent.style.display = "none"
       }
   }
})

// function for User Menu
menuUser.onclick = () => {
    menuUser.classList.toggle("header__menu__user--active")
    menuUserContent.classList.toggle("header__user__content--active")
}


//todo update array click
menuElement.forEach(element => {
    element.onclick = () => {
        if (menuUserContent.className === "header__user__content header__user__content--active"
            && menuUser.className === "header__menu__icon header__menu__user header__menu__user--active"
        )
        {
                menuUserContent.classList.remove("header__user__content--active")
                menuUser.classList.remove("header__menu__user--active")
        }
    }
})

//function for aside
womanMenu.onclick = () => {
    if (womanSecondaryMenu.className === 'screen__navigation__list woman__menu__navigation') {
        womanSecondaryMenu.classList.add('secondary__menu__navigation--active')
    } else {
        womanSecondaryMenu.classList.remove('secondary__menu__navigation--active')
    }
}

manMenu.onclick = () => {
    if (manSecondaryMenu.className === 'screen__navigation__list man__menu__navigation') {
        manSecondaryMenu.classList.add('secondary__menu__navigation--active')
    } else {
        manSecondaryMenu.classList.remove('secondary__menu__navigation--active')
    }
}

// Sliders
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

// Timer

let timerInterval;
const startingSeconds = 4 * 24 * 60 * 60; // 4 days in seconds
let remainingSeconds = startingSeconds;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            remainingSeconds--;
            formatTime(remainingSeconds);
        }, 1000);
    }
}

function formatTime(sec) {
    let days = Math.floor(sec / (24 * 3600));
    let hrs = Math.floor((sec % (24 * 3600)) / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;

    timeDaySelector.innerHTML = days;
    timeHoursSelector.innerHTML = hrs;
    timeMinutesSelector.innerHTML = mins;
    timeSecondsSelector.innerHTML = secs;

    const timeArray = [days, hrs, mins, secs];
}

startTimer();

// todo update array for timer


