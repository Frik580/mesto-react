import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      conteinerSize="popup__conteiner_size_medium"
    >
      <fieldset className="popup-form__conteiner">
        <input
          type="url"
          ref={inputRef}
          id="avatar"
          name="avatar"
          className="popup-form__item"
          minLength="2"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="avatar-error" className="error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
