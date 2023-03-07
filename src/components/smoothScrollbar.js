import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

var overscrollOptions = {
  enable:true,
  effect:'bounce',
  damping: 0.15,
  maxOverscroll: 0
}

var options = {
  damping: 0.07,
  plugins: {
    overscroll: {...overscrollOptions} 
  }
}

const Scroll = () => {
  useEffect (() => {
    //if(window.innerWidth > 992) {
      Scrollbar.use(OverscrollPlugin)
      Scrollbar.init(document.body, options);
    //}
    
    return () => {
      if(Scrollbar) Scrollbar.destroy(document.body)
    }

  },[Scrollbar]);

  return null;
}

export default Scroll;