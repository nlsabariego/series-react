import React from "react";
import FavoritesList from "./FavoritesList";
import List from "./List";

function ListContainer() {
  return (
    <div class='list-container'>
      <FavoritesList />
      <List />
    </div>
  );
}

export default ListContainer;
