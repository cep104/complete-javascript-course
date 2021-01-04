'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const modalAppear = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', modalAppear);
}

btnCloseModal.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      close();
    }
  }
});
