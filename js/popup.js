var link = document.querySelector('.search-link');
var popup = document.querySelector('.popup');

var form = popup.querySelector('form');
var inputs = popup.querySelectorAll("[type=text]");

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle('popup-close');
});

form.addEventListener("submit", function (evt) {
  inputs.forEach(function(input) {
    if (!input.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('popup-error');
    }
  });
});

popup.classList.add('popup-close');
