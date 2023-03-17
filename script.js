let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let blogArticles = document.querySelectorAll('.blog-article.short');
let cardButtonList = document.querySelector('.card-view-button-list');
let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cards = document.querySelector('.cards');





    for (let blogArticle of blogArticles) {
        let more = blogArticle.querySelector('.more');
        more.onclick = function() {
            blogArticle.classList.remove('short');
        }

    };

cardButtonList.onclick = function(){
    cardButtonList.classList.add('active');
    cardButtonGrid.classList.remove('active');
    cards.classList.add('list');
};
cardButtonGrid.onclick = function(){
    cardButtonList.classList.remove('active');
    cardButtonGrid.classList.add('active');
    cards.classList.remove('list');
};

let mainImage = document.querySelector('.active-image');
let previews = document.querySelectorAll('.gallery-list a');

let activeImage = previews[1];

activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.gallery-list .active');
  currentActive.classList.remove('active');
  activeImage.classList.add('active');
};
