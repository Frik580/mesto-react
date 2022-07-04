function ImagePopup({ сard, onClose }) {
  return (
    <div
      className={`popup popup_zoom popup_dark ${сard.link && "popup_opened"}`}
    >
      <div className="popup__zoom-conteiner">
        <button
          onClick={onClose}
          className="popup__close-button hover"
          type="button"
        />
        <img src={сard.link} className="popup__pic" alt={сard.name} />
        <p className="popup__text">{сard.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
