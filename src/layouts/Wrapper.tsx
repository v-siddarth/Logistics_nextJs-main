"use client"

import MobileMenu from "@/common/MobileMenu";
import ScrollToTop from "@/common/scroll-to-top";  
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";
 

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap"); 
}

const Wrapper = ({ children }: any) => {

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);
    
    return () => clearTimeout(timer);  
  }, []); 

  return (
    <> 
      {children}
      <ScrollToTop />
      <MobileMenu />
    </>
  );
};

export default Wrapper;