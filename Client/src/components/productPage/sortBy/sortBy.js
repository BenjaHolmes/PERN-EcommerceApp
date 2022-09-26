import React from 'react';
import './sortBy.css';

const SortBy = () => {
    return (
        <div className='sortByContainer'>
            <form action="#">
                <label for="lang">Sort By</label>
                <select name="sortBy" id="sortBy">
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Name: A-Z">Name: A - Z</option>
                    <option value="Name: Z-A">Name: Z - A</option>
                    <option value="Category: Clothing">Category: Clothing</option>
                    <option value="Category: Footwear">Category: Footwear</option>
                    <option value="Category: Accessories">Category: Accessories</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default SortBy;
