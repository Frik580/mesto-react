import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [buttonValue, setButtonValue] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setState({ name: "", link: "" });
    setButtonValue("Создать");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonValue("Сохранение...");
    onAddPlace({
      name: state.namecard,
      link: state.url,
    });
  }

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

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
          value={state.namecard ?? ""}
          onChange={handleInputChange}
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
          value={state.url ?? ""}
          onChange={handleInputChange}
          id="link"
          name="url"
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
