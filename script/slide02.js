const portraits = document.querySelectorAll(".portrait");
const dates = document.querySelectorAll(".portrait__date");

function portraitsAppear() {
  portraits.forEach((portrait, i) => {
    setTimeout(() => {
      portrait.classList.add("fade-in");
      if (dates[i]) {
        setTimeout(() => dates[i].classList.add("fade-in"), 500);
      }
    }, i * 1000);
  });
}
setTimeout(portraitsAppear, 7000);

const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup_body');
const infoBtn = document.querySelector('.info_btn');
const closeBtn = document.querySelector('.popup_close');

function openPopup() {
  popup.classList.add('active');
  popupBody.classList.add('active');
  infoBtn.classList.add('dimmed');
}

function closePopup() {
  popup.classList.remove('active');
  popupBody.classList.remove('active');
  infoBtn.classList.remove('dimmed');
}

infoBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
