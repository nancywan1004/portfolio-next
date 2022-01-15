import { useRef, useEffect } from "react";

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
  
    const callbackFunction = (entries) => {
      entries.forEach((entry) => {
        //console.log(entry);
    
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('animate-fadeIn')) {
            console.log(entry)
            entry.target.classList.add("animate-fadeIn");
          }
        } 
        else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    }
  
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
      containerRef.current.classList.add("opacity-0");
      observer.observe(containerRef.current)
    }
    
    return () => {
      if(containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [containerRef, options])
  
  return [containerRef]
  }
