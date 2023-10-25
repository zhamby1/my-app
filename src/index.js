// Import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//import review
import Review from './Review';

// get a reference to the rood div in the index.html file and takes control of the root

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el)


// create a component
function App(){
   return(
      <>
      <Review username="Zach"
         rating={3}
         text="Burgers are great" />

      <Review username="Tim"
         rating={2}
         text="Hot dogs are great" />
      
      
      </>
   )
}

//show the component on screen
root.render(<App />)