import "./card-list.style.css";
import Card from "../Card/Card.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((cat) => {
      return <Card key={cat.id} Cats={cat} />;
    })}
  </div>
);

export default CardList;
