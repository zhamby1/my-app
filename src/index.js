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
function RegistrationForm() {
   const [inputs, setInputs] = useState({});

   function handleSubmit(event) {
      event.preventDefault();
      alert(`Username: ${inputs.username}\nEmail: ${inputs.email}`);
   }

   function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
   }

   return (
      <form onSubmit={handleSubmit}>
         <p>
            <label htmlFor="username">
               Username?
            </label>
            <input 
               type="text" 
               id="username"
               name="username"
               value={inputs.username || ""}
               onChange={handleChange} />
         </p>
         <p>
            <label htmlFor="email">
               Email?
            </label>
            <input 
               type="text" 
               id="email"
               name="email"
               value={inputs.email || ""}
               onChange={handleChange} />
         </p>
         <input type="submit" value="Register" />
      </form>
   );
}
   

function App() {
   return (
      <RegistrationForm />
   );
}
//show the component on screen
root.render(<App />)