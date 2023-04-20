document.querySelector('.profile__edit-button').addEventListener('click', function(){
    document.querySelector('.popup_profile').classList.toggle('popup_opened')
})

document.querySelector('.popup__button-close').addEventListener('click', function(){
    document.querySelector('.popup_profile').classList.remove('popup_opened')
})