// Попап профайл
const editBtn = document.querySelector('.profile__edit-button')
const popupProfile = document.querySelector('.popup_profile')
const closeBtn = document.querySelector('.popup__button-close_profile')
// Попап Карточки
const addBtn = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place')
const closeBtnPlace = document.querySelector('.popup__button-close_place')

// Форма попап профайл
const formElement = document.querySelector('.popup__container_profile')
const nameInput = document.querySelector('.popup__input-name')
const aboutInput = document.querySelector('.popup__input-about')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle =  document.querySelector('.profile__subtitle')

const profileTitleValue = profileTitle.textContent
const profileSubtitleValue = profileSubtitle.textContent

const saveBtn = document.querySelector('.popup__button-save_profile')

// Вывод карточек
const placesContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#template-card').content;

// Добавление карточки
const formPlace = document.querySelector('.popup__container_place')
const titleInput = document.querySelector('.popup__input-title')
const linkInput = document.querySelector('.popup__input-link')

const saveBtnPlace = document.querySelector('.popup__button-save_place')

// Отрытие закрытие попап профайл
editBtn.addEventListener('click', function () {
    popupProfile.classList.add('popup_opened')
})

closeBtn.addEventListener('click', function () {
    popupProfile.classList.remove('popup_opened')
})

// Открытие закрытие попап карточки
addBtn.addEventListener('click', function () {
    popupPlace.classList.add('popup_opened')
})

closeBtnPlace.addEventListener('click', function () {
    popupPlace.classList.remove('popup_opened')
})

// Форма попап профайл

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutInput.value;   
}

nameInput.value = profileTitleValue
aboutInput.value = profileSubtitleValue   

saveBtn.addEventListener('click', function () {
  popupProfile.classList.remove('popup_opened')
})

// closeBtn.addEventListener('click', function () {
//   // inputName.value = '';
//   // inputAbout.value = '';
// })

formElement.addEventListener('submit', handleFormSubmit); 

// Вывод карточек
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

   function render () {
    
   cards.forEach(renderCard)
  }

  function renderCard ({ name, link }) {
    const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
    placeElement.querySelector('.element__info').textContent = name;
    placeElement.querySelector('.element__photo').src = link;
    placesContainer.prepend(placeElement);
  }

  render();

// Удаление карточки

function removeCard () {
  const delCards = document.querySelectorAll('.element__button-del');
  
  delCards.forEach((el) => {
    el.addEventListener('click', removeParent);
  });
  
  function removeParent () {
      const del = this.parentElement;
      
      del.remove();
  }
}

removeCard()
  
// Добавление карточки

function addCard (evt) {
  evt.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };
  
  renderCard(newCard)

  likeToggle()

  removeCard()
  
  imgPlus()
}

formPlace.addEventListener('submit', addCard)

// closeBtnPlace.addEventListener('click', function () {
//   titleInput.value = '';
//   linkInput.value = '';
// })

saveBtnPlace.addEventListener('click', function () {
  popupPlace.classList.remove('popup_opened')
})

// Попап с картинкой

const imgBtn = document.querySelectorAll('.element__photo')
const popupImg = document.querySelector('.popup_img')
const closeBtnImg = document.querySelector('.popup__button-close_img')
const popupPhoto = document.querySelector('.popup__photo')

function imgPlus () {
  imgBtn.forEach(photo => {
    photo.addEventListener('click', () => {
      popupPhoto.src = photo.src
      popupImg.classList.add('popup_opened')
    })
  })
}

imgPlus()

closeBtnImg.addEventListener('click', function () {
  popupImg.classList.remove('popup_opened')
})

// Поставить лайк на кнопку
function likeToggle () {
  const likeButton = document.querySelectorAll('.element__button-like');

  likeButton.forEach(like => {
    like.addEventListener('click', () => {
      like.classList.toggle('element__button-like_active');
  });
});
}

likeToggle()