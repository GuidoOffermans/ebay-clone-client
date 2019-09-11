import React, { useState } from 'react';
import './adForm.css';


const CreateAdForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    email: '',
    phoneNumber: ''
  })

  const onChange = (event) => {
    setFormData({...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setFormData({
      title: '',
      description: '',
      image: '',
      price: '',
      email: '',
      phoneNumber: ''
    })
  }

	return (
		<form className="adForm" onSubmit={onSubmit}>
			<label>
				Title:
				<input type="text" name="title" onChange={onChange} value={formData.title}/>
			</label>
			<label>
				Description:
				<input type="text" name="description" onChange={onChange}  />
			</label>
			<label>
				Image url:
				<input type="text" name="image" onChange={onChange} />
			</label>
			<label>
				Price:
				<input type="text" name="price" onChange={onChange} />
			</label>
			<label>
				Email:
				<input type="text" name="email" onChange={onChange} />
			</label>
			<label>
				Phone number:
				<input type="text" name="phoneNumber" onChange={onChange} />
			</label>
			<input id="submit" type="submit" value="Submit" />
		</form>
	);
};

export default CreateAdForm;
