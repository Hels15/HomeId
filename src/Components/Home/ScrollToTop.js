import React, {useState} from 'react';

function ScrollToTop(props) {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150){
      setVisible(true)
    }
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
    const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div><i style={{display: visible ? 'inline': "none"}} onClick={scrollToTop} className="fas fa-angle-double-up"></i></div>
    );
}

export default ScrollToTop;