import React from "react";
import "../stylesheets/Form.scss";

function Form() {
  return (
    <form className='form'>
      <input type='text' placeholder='Nombre de la serie' className='js-input input__text' />
      <input type='submit' value='BUSCAR' className='js-button input__button' />
    </form>
  );
}

export default Form;
