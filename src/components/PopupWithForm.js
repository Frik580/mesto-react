import { useEffect } from "react";

function PopupWithForm({
  name,
  title,
  buttonValue,
  isOpen,
  onClose,
  conteinerSize,
  children,
  onSubmit,
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

  useEffect(() => {
    function handleClickOverlay(e) {
      e.target.classList.contains("popup_opened") && onClose();
    }

    document.addEventListener("mousedown", handleClickOverlay);

    return () => {
      document.removeEventListener("mousedown", handleClickOverlay);
    };
  }, []);

  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className={`popup__conteiner ${conteinerSize}`}>
        <button
          onClick={onClose}
          className="popup__close-button hover"
          type="button"
        ></button>
        <form
          onSubmit={onSubmit}
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
