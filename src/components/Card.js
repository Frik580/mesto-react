function Card({ title, url, like, onCardClick }) {

    function handleClick() {
        const data = { title, url };
        onCardClick(data);
      }  

  return (
    <li className="element">
      <img onClick={handleClick} src={url} className="element__pic" alt={title} />
      <button className="element__del-button hover" type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{title}</h2>
        <div className="element__like">
          <button className="element__like-button hover" type="button"></button>
          <p className="element__like-value">{like}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
