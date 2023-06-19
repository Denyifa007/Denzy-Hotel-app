import React, {useState} from 'react';
// datapicker 
import DatePicker from 'react-datepicker';
// datapicker css 
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
// icons 
import { BsCalendar } from 'react-icons/bs';

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  return (
  <div className='relative flex items-center justify-end h-full cursor-pointer'>
    {/* icon  */}
    <div className='absolute z-10 pr-8'>
      <div>
      <BsCalendar className='text-accent text-base'/>

      </div>
    </div>
    
    <DatePicker className= 'w-full h-full cursor-pointer' 
    selected={startDate}
    placeholderText='Check in'
    onChange={(date) =>setStartDate(date)}
    
    />
    
    
  </div>
  );
};

export default CheckIn;
