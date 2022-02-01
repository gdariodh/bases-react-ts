import { useState } from "react";

// establecer las props que recibe
interface Props { 
    // ? hace opcional el prop
    initialValue?: number
}

export const Counter = ({initialValue = 0}:Props) => {

   const [counter, setCounter] = useState(initialValue)

   const handleClick = () => {
     setCounter(previousValue => previousValue + 1)
   }

    return (
        <>
           <h1>Counter: {counter}</h1>    

           <button onClick={handleClick}>+1 </button>       
        </>
    )
}
