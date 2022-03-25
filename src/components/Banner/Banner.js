import React, { useState } from 'react';
import "./Banner.css"; 
import { Button } from '@material-ui/core';
import Search from '../Search/Search';

const Banner = () => {

    const [showDatePicker, setShowDatePicker] = useState(true); 

    return (
    <div className="Banner">
            <div className="Banner__search">
                { showDatePicker &&  <Search />}
                <Button  
                    variant="outlined"  
                    className="Banner__searchButton"
                    onClick={() => setShowDatePicker(!showDatePicker)}>
                   {  showDatePicker ? "Hide" : " Dates search"}
                </Button>
            </div>
            <div className="Banner__info">
                 <h1> Get started </h1>
                 <h5>
                     the content of banner 
                     lorem ipsium lorem ipsium 
                     lorem ipsium lorem ipsium 
                 </h5>
                 <Button variant="outlined">Explore nearby</Button>
            </div>
    </div>
    )
}


export default Banner;