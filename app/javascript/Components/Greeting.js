import React from 'react';
import { getGreetings } from '../Redux/Slices/greetingsSlice';

function Greetings() {

  return (
    <div >
      <p>
         {getGreetings.greeting}
      </p>
    </div>
  );
}

export default Greetings;