import { useState } from "react";
import { peopleData } from "../../people-data";
import { BiTrash } from "react-icons/bi";
const UseStateArray = () => {
  const [People, setPeople] = useState(peopleData);
  const Removeid = (id) => {
    let arr = People.filter((p) => p.id !== id);
    setPeople(arr);
  };
  return (
    <section className="--100vh --flex-center --bg-primary">
      <div className="container">
        <h1 className="--color-white">UseState in Array</h1>
        {People.map((people) => {
          const { id, name } = people;
          return (
            <div key={id} className="--flex-between --bg-light --my --card">
              <h2>{name}</h2>
              <BiTrash color="red" size={22} onClick={() => Removeid(id)} />
            </div>
          );
        })}
        <button className="--btn --btn-danger" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </section>
  );
};

export default UseStateArray;
