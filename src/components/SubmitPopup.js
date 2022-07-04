import PopupWithForm from "./PopupWithForm";

function SubmitPopup({ card, isOpen, onClose, onDeleteCard }) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

    return (
        <PopupWithForm
        name="submit"
        title="Вы уверены?"
        buttonValue="Да"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        conteinerSize="popup__conteiner_size_small"
      />
    );
  }
  
  export default SubmitPopup;