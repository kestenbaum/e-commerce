const containerDropDown = document.querySelector(".language-dropdown");
const languageSelectButton = document.querySelector(".language-drop__button");
const languageContent = document.querySelector(".language-drop__content");
const languageButton = document.querySelectorAll(".language-drop__content a");
const languageArrow = document.querySelector('.language__arrow');
const selectedLanguage = document.querySelector(".selected__language");

containerDropDown.onclick = (event) => {
    languageArrow.classList.toggle("active")
}

languageSelectButton.onclick = () => {
    languageContent.style.display = languageContent.style.display === "flex" ? "none" : "flex";
}

languageButton.forEach(btn => {
   btn.onclick = (event)  => {
       const changeLanguage= event.target.textContent;
       selectedLanguage.textContent  = changeLanguage;

       if (!containerDropDown.contains(event.target)) {
           languageContent.style.display = "flex"
       } else {
           languageContent.style.display = "none"
       }
   }
})