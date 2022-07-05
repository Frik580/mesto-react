import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect, useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [buttonValue, setButtonValue] = useState("");
  const inputCardNameRef = useRef();
  const inputCardLinkRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setButtonValue("Сохранение...");
    onAddPlace({
      name: inputCardNameRef.current.value,
      link: inputCardLinkRef.current.value,
    });
  }

  useEffect(() => {
    inputCardNameRef.current.value = "";
    inputCardLinkRef.current.value = "";
    setButtonValue("Создать");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonValue={buttonValue}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup-form__conteiner">
        <input
          type="text"
          ref={inputCardNameRef}
          id="name-card"
          name="namecard"
          className="popup-form__item"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
        />
        <span id="name-card-error" className="error" />
      </fieldset>
      <fieldset className="popup-form__conteiner">
        <input
          type="url"
          ref={inputCardLinkRef}
          id="link"
          name="link"
          className="popup-form__item"
          minLength="2"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-error" className="error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
