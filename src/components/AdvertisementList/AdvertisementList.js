import React, { useState, useEffect } from 'react';
import request from 'superagent';
import './advertisementList.css'
import {Link} from 'react-router-dom'

import Advertisement from '../Advertisement/Advertisement';

const AdvertisementList = () => {
	const [ adList, setAdList ] = useState([]);

	useEffect(() => {
    
    request.get('http://localhost:4000/advertisements').then((res) => {
      setAdList(res.body)}).then(res => console.log(res))
  
	}, []);

	return (
		<div className="advertisementList">
			{adList ? (
				adList.map((ad) => (
					<Link to={`/advertisements/${ad.id}`}><Advertisement key={ad.id} title={ad.title} price={ad.price} /></Link>
				))
			) : (
				'loading'
			)}
		</div>
	);
};

export default AdvertisementList;
