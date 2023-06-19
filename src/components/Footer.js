import React from 'react';
// logo 
import LogoWhite from '../assets/img/logo-white.svg'
import ScrollToTop from "react-scroll-to-top";





const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
        <ScrollToTop smooth top= '20'
         width='50p'
         color='gold' 
          />
      <div className='container mx-auto text-white flex justify-between'>
        {/* logo */}
        <a href="/">

        <img src={LogoWhite} alt="" />
        </a>
        <div className='flex flex-col -py-1'>
        <p className='text-sm capitalise px-5'>Copyright & copy; 2023. All rights reserved</p>  
        <p className=' text-xs uppercase  px-5 py-1'>Created by denzy tech</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
