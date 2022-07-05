import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function SubmitPopup({ card, isOpen, onClose, onDeleteCard }) {
  const [buttonValue, setButtonValue] = useState("");

  useEffect(() => {
    setButtonValue("Да");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    setButtonValue("Удаление...");
    onDeleteCard(card);
  }

    return (
        <PopupWithForm
        name="submit"
        title="Вы уверены?"
        buttonValue={buttonValue}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        conteinerSize="popup__conteiner_size_small"
      />
    );
  }
  
  export default SubmitPopup;