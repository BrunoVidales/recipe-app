import { useEffect, useState } from "react";

export default function useIsMobile() {


    const [mobile, setMobile] = useState(window.innerWidth <= 992);
    
    useEffect(() => {
          const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let isMobile = viewportWidth <= 992;
            setMobile(isMobile);
          };
          
          handleResize();
          
          window.addEventListener('resize', handleResize);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          }
    }, []);

    return {
      mobile
    };
};