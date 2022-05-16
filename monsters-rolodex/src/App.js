// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchFeild] = useState(""); //[value,setValue]
  const [mons, setMonsters] = useState([]);
  const [filterStat, setFilter] = useState(mons);
  const [title, setTitle] = useState("Monster");
  useEffect(() => {
    //為了讓render 已經render 完成後才作fetch,Effect 只跑一次，所以用[]
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const filterarr = mons.filter((f) =>
      f.name.toLocaleLowerCase().includes(searchField.toLowerCase())
    );
    setFilter(filterarr);
  }, [mons, searchField]);
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchFeild(searchFieldString);
  };

  const onSearchChangeTitle = (e) => {
    const searchFieldTitle = e.target.value.toLocaleLowerCase();
    setTitle(searchFieldTitle);
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     mons: [],
  //     searchField: "",
  //   };
  //   this.onSearchChange = this.onSearchChange.bind(this);
  // }
  // componentDidMount() {
  //   //為了讓render 已經render 完成後才作fetch
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => res.json())
  //     .then((users) => this.setState({ mons: users }));
  // }

  // render() {
  //   const { mons, searchField } = this.state;
  //   const { onSearchChange } = this;

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Monstor Search"
      />

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChangeTitle}
        placeholder="Replace Title"
      />
      <CardList monsters={filterStat} />
    </div>
  );
};

export default App;
