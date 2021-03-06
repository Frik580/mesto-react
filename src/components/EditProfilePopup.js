import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect, useContext, useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [state, setState] = useState("");
  const [buttonValue, setButtonValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setState({ name: currentUser.name, about: currentUser.about });
    setButtonValue("Сохранить");
    inputRef.current.focus();
  }, [currentUser, isOpen]);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonValue("Сохранение...");
    onUpdateUser({
      name: state.name,
      about: state.about,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonValue={buttonValue}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={true}
    >
      <fieldset className="popup-form__conteiner">
        <input
          type="text"
          ref={inputRef}
          value={state.name ?? ""}
          onChange={handleInputChange}
          id="user-name"
          name="name"
          className="popup-form__item"
          minLength="2"
          maxLength="40"
          placeholder="Введите имя"
          required
        />
        <span id="user-name-error" className="error" />
      </fieldset>
      <fieldset className="popup-form__conteiner">
        <input
          type="text"
          value={state.about ?? ""}
          onChange={handleInputChange}
          id="about"
          name="about"
          className="popup-form__item"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          required
        />
        <span id="about-error" className="error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default React.memo(EditProfilePopup);
