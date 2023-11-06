// Import the react and reactDom libraries
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import review
import Review from './Review';

// get a reference to the rood div in the index.html file and takes control of the root

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el)


// create a component

async function FetchForecast() {
   const url = "https://wp.zybooks.com/weather.php?zip=90210";
   const response = await fetch(url);
   if (response.ok) {
      const result = await response.json();
      console.log("Day 1 high is " + result.forecast[0].high);
   }
};
   

function App() {
   return (
      <FetchForecast />
   );
}
//show the component on screen
root.render(<App />)