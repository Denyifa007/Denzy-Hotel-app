import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const {header} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0);

  }, [header])
};

export default ScrollToTop;
