import React, { useState} from 'react';
import './Search.css'; 
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range"; 
import PeopleIcon from '@material-ui/icons/People';
import './Search.css'; 
import { Button } from '@material-ui/core';

const Search = () => {
const [startDate, setStartDate] = useState(new Date()); 
const [endDate, setEndDate] = useState(new Date()); 


const selectionOptions = {
    startDate:startDate, 
    endDate: endDate, 
    key:"selectiion"
}; 

const handleDatePicker = ( ranges ) =>  {
    setStartDate(ranges.selection.startDate); 
    setEndDate(ranges.selection.endDate); 
}


    return (
        <div className='Search'>
              <DateRangePicker   
                 ranges={[selectionOptions]}    
                 onChange={handleDatePicker}  
              />
                 <h2>
                    <span>  numbers of people </span>

                     <PeopleIcon  />
                 </h2>
                 <input 
                    type="number"
                    min={2}
                    defaultValue={2}
                  />
                  <Button>
                      click me 
                  </Button>
        </div>
    )
}


export default Search;