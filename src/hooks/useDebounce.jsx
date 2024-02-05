import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value)
      }, delay);
    
      return () => {
        second
      }
    }, [third])
    return debounceValue
}