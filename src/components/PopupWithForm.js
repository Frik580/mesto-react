import React from "react";

function PopupWithForm({
  name,
  title,
  buttonValue,
  isOpen,
  onClose,
  conteinerSize,
  children,
}) {
  React.useEffect(() => {
    function handleEscClose(event) {
      event.key === "Escape" && onClose();
    }

    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, []);

  React.useEffect(() => {
    function handleClickOverlay(event) {
      event.target.classList.contains("popup_opened") && onClose();
    }

    document.addEventListener("mousedown", handleClickOverlay);

    return () => {
      document.removeEventListener("mousedown", handleClickOverlay);
    };
  }, []);

  return (
    <div
      className={
        isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`
      }
    >
      <div className={`popup__conteiner ${conteinerSize}`}>
        <button
          onClick={onClose}
          className="popup__close-button hover"
          type="button"
        ></button>
        <form
          className={`popup-form popup-form_${name}`}
          name="user"
          noValidate
        >
          <h3 className="popup-form__title">{title}</h3>
          {children}
          <button className="popup-form__button" type="submit" name="button">
            {buttonValue}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
