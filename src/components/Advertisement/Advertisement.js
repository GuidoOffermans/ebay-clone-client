import React from 'react';
import './advertisement.css';

const Advertisement = (props) => {



	return (
		<div className="advertisement">
			<h3>title: {props.title}</h3>
			{props.admin ? (
				<div className="buttons">
					<button>EDIT</button>
					<button>X</button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Advertisement;
