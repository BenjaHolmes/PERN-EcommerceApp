import React from 'react';
import './footer.css';
import github from './github.png';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="div2">
                <ul>
                    <li className='listTitle'> Visit Us:</li>
                    <li> 191 Hopcliffe Road </li>
                    <li> Cardiff, South Glamorgan  </li>
                    <li> CF10 1SZ </li>
                </ul>
            </div>
            <div className="div2">
                <ul>
                    <li className='listTitle'> Contact Us: </li>
                    <li> Sales@OneBillionClothing.co.uk </li>
                    <li> Accounts@OneBillionClothing.co.uk </li>
                    <li> 029 2064 9200 </li>
                </ul>
            </div>
            <div className="div3">
            </div>
            <div className="div3">
                <a href='https://github.com/BenjaHolmes/PERN-EcommerceApp' target='_blank' rel='noreferrer'>
                    <img src={github} alt='Link to Project Creators Github Account'/>
                    <p> Visit This Project's Github Repository </p>
                </a>
            </div>
        </div>
    );
}

export default Footer;
