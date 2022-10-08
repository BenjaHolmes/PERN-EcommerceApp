import React from 'react';
import './reviews.css';
import { useState, useEffect } from 'react';
import ReviewCard from './reviewCard.js';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const id = props.id
    useEffect(() => {
        async function fetchReviews() {
        const response = await fetch(`http://localhost:4000/api/reviews/${id}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json"},
            mode: 'cors'
        });
        const data = await response.json();
        console.log(data);
        setReviews(data);
    }   
    fetchReviews();
    }
    , [id]);


    return (
        <div className='reviewContainer'>
            <div className="topbar">
                <h2> Customer Reviews </h2>
                <div className='tbar'></div>
            </div>
                <div className='reviewBox'>
                    { reviews != null ? reviews.map((review, index) => 
                    <ReviewCard key={index} title={review.title}
                    stars={review.star_rating} body={review.body}
                    />) : <p> No Reviews For This Product Yet </p>}
                </div>
            <div className="bbar"></div>
        </div>
    );
}

export default Reviews;
