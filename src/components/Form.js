import React from "react";

function Form() {
  return (
    <form class='form'>
      <input type='text' placeholder='Nombre de la serie' class='js-input input__text' />
      <input type='submit' value='BUSCAR' class='js-button input__button' />
    </form>
  );
}

export default Form;
