var link = document.querySelector('.search-link');
var popup = document.querySelector('.popup');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle('popup-close');
  popup.classList.toggle('popup');
});
