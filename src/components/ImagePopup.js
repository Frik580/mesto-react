function ImagePopup({ selectedCard, onClose }) {
  return (
    <div
      className={
        selectedCard
          ? `popup popup_zoom popup_dark popup_opened`
          : `popup popup_zoom popup_dark`
      }
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
