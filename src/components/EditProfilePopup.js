import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup-form__conteiner">
        <input
          type="text"
          value={name || false}
          onChange={handleChangeName}
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
          value={description || false}
          onChange={handleChangeDescription}
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
  );
}

export default EditProfilePopup;
