import React, { useState, useEffect } from 'react';
import request from 'superagent';

const AdDetails = ({ match }) => {
	const [ adDetails, setAdDetails ] = useState();

	useEffect(() => {
		request
			.get(`http://localhost:4000/advertisements/${match.params.id}`)
			.then((req) => setAdDetails(req.body))
			.catch(console.error);
	}, []);

	return (
		<div>
			{adDetails ? (
				<div>
					<h2>Title: {adDetails.title}</h2>
					<p>Description: {adDetails.description}</p>
          <p>Price: €{adDetails.price}</p>
          <p>Email: {adDetails.email}</p>
          <p>Phone: {adDetails.phoneNumber}</p>
          <img key={adDetails.id} src={adDetails.image} alt=''/>
				</div>
			) : (
				'loading'
			)}
		</div>
	);
};

export default AdDetails;
