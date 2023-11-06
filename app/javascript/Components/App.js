import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import store from '../Redux/store';
import Greeting from './Greeting';

function App() {
  return (
   <di>
     <p>testeo</p>
     <Router>
       <Routes>
         <Route path="/" element={<Greeting />} />
       </Routes>
     </Router>
   </di>
  );
}

export default App;