import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCars] = React.useState([]);

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];
    Promise.all(promises)
      .then((results) => {
        const data = results[0];
        const userID = data._id;
        const initialCards = results[1];
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCars(
          initialCards.map((item) => ({
            id: item._id,
            title: item.name,
            url: item.link,
            likes: item.likes.length,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img
            onClick={onEditAvatar}
            src={userAvatar}
            className="profile__avatar"
            alt="Фотография в профайле"
          />
          <div className="profile__avatar-ikon"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__text">{userDescription}</p>
          <button
            onClick={onEditProfile}
            className="profile__edit-button hover"
            type="button"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button hover"
          type="button"
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              url={card.url}
              like={card.likes}
              onCardClick={onCardClick}
            ></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
