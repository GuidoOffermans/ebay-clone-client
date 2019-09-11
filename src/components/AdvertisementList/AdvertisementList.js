import React, { useState, useEffect } from 'react';
import request from 'superagent';
import './advertisementList.css'

import Advertisement from '../Advertisement/Advertisement';

const AdvertisementList = () => {
	const [ adList, setAdList ] = useState([]);

	useEffect(() => {
    request.get('http://localhost:4000/advertisement').then((res) => {
      console.log(res.body)
      setAdList(res.body)});
  
	}, []);

	return (
		<div className="advertisementList">
			{adList ? (
				adList.map((ad) => (
					<Advertisement  title={ad.title} price={ad.price} />
				))
			) : (
				'loading'
			)}
		</div>
	);
};

export default AdvertisementList;
