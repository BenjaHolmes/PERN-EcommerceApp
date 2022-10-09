import React from 'react';
import './recommendations.css';
import { useState, useEffect } from 'react';
import RecCard from './recCard';


const Recommendations = (props) => {
    const [recommendations, setRecommendations] = useState([])
    useEffect(() => {
        async function fetchRecs() {
            const response = await fetch('http://localhost:4000/api/product/discover');
            const data = await response.json();
            console.log(data);
            setRecommendations(data);
        }
        fetchRecs();
    }, []);

    return (
        <div className='recommendationsContainer'>
                <h2> Discover More Items </h2> 
            <div className="productList">
                { recommendations != null ? recommendations.map((body, index) => 
                    <RecCard setProduct={props.setProduct}
                    key={index} name={body.name}
                    description={body.description} price={body.price}
                    path={body.picture_path} id={body.id} />) : '' }
            </div>   
        </div>
    );
}

export default Recommendations;
