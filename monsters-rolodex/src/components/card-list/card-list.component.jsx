import "./card-list.style.css";
import Card from "../Card/Card.component";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((cat) => {
      return <Card key={cat.id} Cats={cat} />;
    })}
  </div>
);

export default CardList;
