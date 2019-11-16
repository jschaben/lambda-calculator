import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";


const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers] = useState(numbers);
    
  return (
    <div className="number-container">
      {buttonNumbers.map(number => {
        return (
          <NumberButton
          key={number}
          buttonText={number}
          addNumber={props.addNumber}
          />
        );
      })}
    
    </div>
  );
};

export default Numbers;