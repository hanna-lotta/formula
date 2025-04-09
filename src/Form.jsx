import './Form.css';
import { useState } from 'react';
import Joi from 'joi';

const schema = Joi.object({

	name: Joi.string()
		.min(1)
		.required(),

	email: Joi.string()
		.email({ tlds: false })
		.required()

//})
		.min(1)
		.required(),

	phone: Joi.string()
		.pattern(/^[0-9]{10}$/)
		.required()
});

const Form = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		phone: ''
	});
	  return (
		
		<div className="form-container">
	<h1>Formulär</h1>
	<p>Fyll i dina uppgifter</p>
	<section className='form'>
		<label>Namn</label>
		<input type="text" 
			value={data.name}
			onChange={event => setData({ ...data, name: event.target.value })} 
			placeholder="Förnamn Efternamn" 
		/>
		<p className='error'></p>
		<label>E-post</label>
		<input type="email" 
			value={data.email}
			onChange={event => setData({ ...data, email: event.target.value })}	
			placeholder='E-postadress'
		/>
		<p className='error'></p>
		<label>Telefon</label>
		<input type="tel" 
			value={data.phone}
			onChange={event => setData({ ...data, phone: event.target.value })}	
			placeholder='0701234567' 
			/*pattern="[0-9]{10}"
			maxLength="10"
			minLength="10"
			title="Ange ett giltigt telefonnummer med 10 siffror"*/
		/>
		<p className='error'></p>
		<button>Spara</button>
	</section>
	</div>
	
  );
}
export default Form;