import React, { useEffect, useRef } from "react";

function PopupWithForm({
  name,
  title,
  buttonValue,
  isOpen,
  onClose,
  conteinerSize,
  children,
  onSubmit,
  isValid,
}) {
  useEffect(() => {
    function handleEscClose(e) {
      e.key === "Escape" && onClose();
    }
    document.addEventListener("keyup", handleEscClose);
    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className={`popup popup_${name} ${isOpen && "popup_opened"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`popup__conteiner ${conteinerSize}`}
      >
        <button
          onClick={onClose}
          className="popup__close-button hover"
          type="button"
        />
        <form
          onSubmit={onSubmit}
          className={`popup-form popup-form_${name}`}
          name="user"
          noValidate
        >
          <h3 className="popup-form__title">{title}</h3>
          {children}

          <button
            disabled={!isValid}
            className={`popup-form__button ${
              !isValid && "popup-form__button_disabled"
            }`}
            type="submit"
            name="button"
          >
            {buttonValue}
          </button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(PopupWithForm);
