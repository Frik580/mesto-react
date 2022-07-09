import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function SubmitPopup({ card, isOpen, onClose, onDeleteCard }) {
  const [buttonValue, setButtonValue] = useState("");

  useEffect(() => {
    setButtonValue("Да");
    // function handleEnterDelete(e) {
    //   e.key === "Enter" && handleSubmit(e);
    // }

    // document.addEventListener("keyup", handleEnterDelete);

    // return () => {
    //   document.removeEventListener("keyup", handleEnterDelete);
    // };
  }, [isOpen]);

  const handleSubmit = (e) => {
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
        isValid={true}
      />
    );
  }
  
  export default SubmitPopup;