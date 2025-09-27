const schemeItems = document.querySelectorAll("#scheme_item");

function schemeItemsAppear() {
  schemeItems.forEach((schemeItem, i) => {
    setTimeout(() => {
      schemeItem.classList.add("fade-in");
    }, i * 1000);
  });
}
setTimeout(schemeItemsAppear, 1000);


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
