import React from 'react';
import './advertisement.css'

const Advertisement = (props) => {
  console.log(props)
	return (
		<div className='advertisement'>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
		</div>
	);
};

export default Advertisement;
