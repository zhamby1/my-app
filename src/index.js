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
function Movie(){
   
   const [movie, setMovie] = useState({
      title: "Inception",
      rating: "PG-13",
      releaseYear: 2010
   })

   function changeTitle(){
      setMovie(prevState => ({
         ...prevState, title:"Titanic"
      }))
   }

   function changeMovie(){
      setMovie({
         title:"Lion King",
         rating: "PG",
         releaseYear: 1996
      })
   }



   return(
      <>
         <h1>Favorite Movie</h1>
         <p>
            {movie.title}, {movie.rating}, {movie.releaseYear}
         </p>
         <button onClick={changeTitle}>
            Change Title
         </button>

         <button onClick={changeMovie}>
            Change Movie
         </button>
      </>
   )
}



   

function App() {
   return (
      <Movie />
   );
}
//show the component on screen
root.render(<App />)