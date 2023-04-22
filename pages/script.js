// Отрытие закрытие попап профайл
document.querySelector('.profile__edit-button').addEventListener('click', function () {
    document.querySelector('.popup_profile').classList.add('popup_opened')
})

document.querySelector('.popup__button-close').addEventListener('click', function () {
    document.querySelector('.popup_profile').classList.remove('popup_opened')
})

// Попап добавление карточки
document.querySelector('.profile__add-button').addEventListener('click', function () {
    document.querySelector('.popup_place').classList.add('popup_opened')
})

document.querySelector('.popup__button-close_place').addEventListener('click', function () {
    document.querySelector('.popup_place').classList.remove('popup_opened')
})

// Форма попап профайл
const formElement = document.querySelector('.popup__container')
const nameInput = document.querySelector('.popup__input-name')
const aboutInput = document.querySelector('.popup__input-about')

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__subtitle').textContent = aboutInput.value;
}

document.querySelector('.popup__button-save').addEventListener('click', function () {
  document.querySelector('.popup_profile').classList.remove('popup_opened')
})

document.querySelector('.popup__button-close').addEventListener('click', function () {
    document.querySelector('.popup__input-name').value = '';
})
document.querySelector('.popup__button-close').addEventListener('click', function () {
    document.querySelector('.popup__input-about').value = '';
})

formElement.addEventListener('submit', handleFormSubmit); 

// Добавление карточек через JS
const cards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const placesContainer = document.querySelector('.elements');
  const placeTemplate = document.querySelector('#template-card').content;

  function render () {
    cards.forEach(renderCard)
  }

  function renderCard ({ name, link }) {
    const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
    placeElement.querySelector('.element__info').textContent = name;
    placeElement.querySelector('.element__photo').src = link;
    placesContainer.append(placeElement);
  }

  render();

  // Поставить лайк на кнопку
  const likeButton = document.querySelectorAll('.element__button-like');

  likeButton.forEach(like => {
    like.addEventListener('click', () => {
      like.classList.toggle('element__button-like_active');
    });
  });

  // Удаление карточки
  const delCards = document.querySelectorAll('.element__button-del');
  
  delCards.forEach( (el) => {
    el.addEventListener('click', removeParent);
  });
  
  function removeParent () {
      const del = this.parentElement;
      
      del.remove();
  }

  // Добавление карточки

const formPlace = document.querySelector('.popup__container_place')
const titleInput = document.querySelector('.popup__input-title')
const linkInput = document.querySelector('.popup__input-link')

function addCard (evt) {
  evt.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };
  cards.unshift(newCard)
  console.log('cards', cards)
}

formPlace.addEventListener('submit', addCard)

document.querySelector('.popup__button-save_place').addEventListener('click', function () {
  document.querySelector('.popup_place').classList.remove('popup_opened')
})