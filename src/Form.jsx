import './Form.css';
import { useState } from 'react';
import Joi from 'joi';

const Form = () => {
	  return (
		<>
	<section className='form'>
		<label>Namn</label>
		<input type="text" />
		<p></p>
		<label>E-post</label>
		<input type="email" />
		<p></p>
		<label>Telefon</label>
		<input type="tel" />
		<p></p>
		<button>Spara</button>
	</section>
	</>
  );
}
export default Form;