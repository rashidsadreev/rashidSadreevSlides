const graphs = document.querySelectorAll(".graph");
const graphText = document.querySelectorAll(".graph__text");

function graphsAppear() {
  graphs.forEach((graph, i) => {
    setTimeout(() => {
      graph.classList.add("fade-in");
      if (graphText[i]) {
        setTimeout(() => graphText[i].classList.add("fade-in"), 500);
      }
    }, i * 1000);
  });
}
graphsAppear();


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
