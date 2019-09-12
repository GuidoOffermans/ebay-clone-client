import request from 'superagent';
import React, { useState } from 'react';
import './adForm.css';

const CreateAdForm = () => {
	const [ formData, setFormData ] = useState({
		title: '',
		description: '',
		image: '',
		price: '',
		email: '',
		phoneNumber: ''
	});

	const onChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		request
			.post('http://localhost:4000/advertisements')
			.send(formData)
			.catch(() => console.error);
		setFormData({
			title: '',
			description: '',
			image: '',
			price: '',
			email: '',
			phoneNumber: ''
		});
	};

	return (
		<form className="adForm" onSubmit={onSubmit}>
			<label>
				Title:
				<input
					type="text"
					name="title"
					onChange={onChange}
					value={formData.title}
				/>
			</label>
			<label>
				Price:
				<input
					type="text"
					name="price"
					onChange={onChange}
					value={formData.price}
				/>
			</label>  
			<label>
				Image url:
				<input
					type="text"
					name="image"
					onChange={onChange}
					value={formData.image}
				/>
			</label>
			<label>
				Email:
				<input
					type="text"
					name="email"
					onChange={onChange}
					value={formData.email}
				/>
			</label>
			<label>
				Phone number:
				<input
					type="text"
					name="phoneNumber"
					onChange={onChange}
					value={formData.phoneNumber}
				/>
				<label>
					Description:
					<textarea
						type="text"
						name="description"
						onChange={onChange}
						value={formData.description}
					/>
				</label>
			</label>
			<input id="submit" type="submit" value="Submit" />
		</form>
	);
};

export default CreateAdForm;
