import PopupWithForm from "./PopupWithForm";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onPostCardError }) {
  const [buttonValue, setButtonValue] = useState("");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
    // defaultValues: {
    //   namecard: "ffff",
    //   url: "cccc",
    // },
  });

  useEffect(() => {
    setTimeout(() => {
      reset();
    }, 2000);
    setButtonValue("Создать");
  }, [onPostCardError]);

  useEffect(() => {
    reset();
    setButtonValue("Создать");
  }, [isOpen]);

  const onHandle = (data) => {
    onAddPlace({
      name: data.namecard,
      link: data.url,
    });
    setButtonValue("Сохранение...");
  };

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonValue={
        onPostCardError
          ? "Ошибка в данных. Проверьте заполнение полей."
          : buttonValue
      }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onHandle)}
      isValid={isValid}
    >
      <fieldset className="popup-form__conteiner">
        <input
          {...register("namecard", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            maxLength: {
              value: 30,
              message: "Максимум 30 символов",
            },
          })}
          type="text"
          className={`popup-form__item ${
            errors?.namecard && "popup-form__item_type_error"
          }`}
          placeholder="Название"
        />
        <span id="name-card-error" className="error">
          {errors?.namecard && <p>{errors?.namecard?.message ?? "Error!!!"}</p>}
        </span>
      </fieldset>
      <fieldset className="popup-form__conteiner">
        <input
          {...register("url", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
          })}
          type="url"
          className={`popup-form__item ${
            errors?.url && "popup-form__item_type_error"
          }`}
          placeholder="Ссылка на картинку"
        />
        <span id="link-error" className="error">
          {errors?.url && <p>{errors?.url?.message ?? "Error!!!"}</p>}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default React.memo(AddPlacePopup);
