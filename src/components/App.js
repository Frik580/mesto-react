import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonValue="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup-form__conteiner">
          <input
            type="text"
            id="user-name"
            name="name"
            className="popup-form__item"
            minLength="2"
            maxLength="40"
            placeholder="Введите имя"
            required
          />
          <span id="user-name-error" className="error"></span>
        </fieldset>
        <fieldset className="popup-form__conteiner">
          <input
            type="text"
            id="about"
            name="about"
            className="popup-form__item"
            minLength="2"
            maxLength="200"
            placeholder="О себе"
            required
          />
          <span id="about-error" className="error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonValue="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup-form__conteiner">
          <input
            type="text"
            id="name-card"
            name="namecard"
            className="popup-form__item"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            required
          />
          <span id="name-card-error" className="error"></span>
        </fieldset>
        <fieldset className="popup-form__conteiner">
          <input
            type="url"
            id="link"
            name="link"
            className="popup-form__item"
            minLength="2"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="submit"
        title="Вы уверены?"
        buttonValue="Да"
        isOpen={false}
        onClose={closeAllPopups}
        conteinerSize="popup__conteiner_size_small"
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonValue="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        conteinerSize="popup__conteiner_size_medium"
      >
        <fieldset className="popup-form__conteiner">
          <input
            type="url"
            id="avatar"
            name="avatar"
            className="popup-form__item"
            minLength="2"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="avatar-error" className="error"></span>
        </fieldset>
      </PopupWithForm>

      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
