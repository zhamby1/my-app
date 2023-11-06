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

function CourseList() {
   const courses = [
      { id: 1, title: "African History", area: "History" },
      { id: 2, title: "Greek II", area: "History" }, 
      { id: 3, title: "Basic Chemistry", area: "Science" }
   ];

   return (
      <ol>
         {courses.map(course => 
            <li key={course.id}>
               <p>{course.title}</p>
               <p>{course.area}</p>
            </li>)}
      </ol>
   );
}


   

function App() {
   return (
      <CourseList />
   );
}
//show the component on screen
root.render(<App />)