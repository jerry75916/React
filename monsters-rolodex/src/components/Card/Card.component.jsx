import "./Card.style.css";

const Card = ({ Cats }) => {
  const { id, name, email } = Cats;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
