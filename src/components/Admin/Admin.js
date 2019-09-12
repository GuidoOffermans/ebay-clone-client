import request from 'superagent'
import React, {useState, useEffect} from 'react'
import Advertisement from '../Advertisement/Advertisement'
import Login from '../Login/Login'

const Admin = () => {
  const [ adList, setAdList ] = useState([]);

	useEffect(() => {
    
    request.get('http://localhost:4000/advertisements').then((res) => {
      setAdList(res.body)}).then(res => console.log(res))
  
  }, []);
  
  const deletePost = () => {

  }

	return (
		<div className="advertisementList">
      <Login/>
			{adList ? (
				adList.map((ad) => (
				<Advertisement key={ad.id} title={ad.title} price={ad.price} admin={true} />
				))
			) : (
				'loading'
			)}
		</div>
	);
}

export default Admin