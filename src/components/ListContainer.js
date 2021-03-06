import React from "react";
import "../stylesheets/ListContainer.scss";
import FavoritesList from "./FavoritesList";
import List from "./List";

function ListContainer() {
  return (
    <div className='list-container'>
      <FavoritesList />
      <List />
    </div>
  );
}

export default ListContainer;
