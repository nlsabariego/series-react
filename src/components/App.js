import React from "react";
import "../stylesheets/App.scss";
import Title from "./Title";
import Form from "./Form";
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
