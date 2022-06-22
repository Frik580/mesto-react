function ImagePopup({ selectedCard, onClose }) {
  let isEmpty =
    Object.keys(selectedCard).length === 0 &&
    selectedCard.constructor === Object;

  return (
    <div
      className={`popup popup_zoom popup_dark ` + (!isEmpty && "popup_opened")}
    >
      <div className="popup__zoom-conteiner">
        <button
          onClick={onClose}
          className="popup__close-button hover"
          type="button"
        ></button>
        <img
          src={selectedCard.url}
          className="popup__pic"
          alt={selectedCard.title}
        />
        <p className="popup__text">{selectedCard.title}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
