import React from "react";
import "../stylesheets/App.css";
import Title from "./Title";
import Form from "./Form";
import FavoritesList from "./FavoritesList";
import List from "./List";
import ListContainer from "./ListContainer";

function App() {
  return (
    <div class='container'>
      <Title />
      <Form />
      <ListContainer />
    </div>
  );
}

export default App;
