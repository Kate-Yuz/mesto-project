//edit card
//переменные
const popupEditButtonOpen = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector("#popup__edit");
const popupEditButtonClose = popupEdit.querySelector(".popup__close-button");
const popupEditButtonSave = popupEdit.querySelector(".popup__submit-button");



//функции

//закрытие + открытие для всех попапов
function popupOpen(popup) {
    popup.classList.add("popup_opened");
}

function popupClose(popup) {
    popup.classList.remove("popup_opened");
}

//edit popup: open+close
popupEditButtonOpen.addEventListener("click", function() {
    popupOpen(popupEdit);
})

popupEditButtonClose.addEventListener("click", function() {
    popupClose(popupEdit);
})



