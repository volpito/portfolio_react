import React from 'react';
import { Link } from 'react-router-dom';

// pages/Documentation/index.jsx
const Works = () => {
  return (
    <>
    <h1>Welcome on the works page. Please, select a category</h1>
    <nav>
    <ul>
    <li>    
      <Link to="/Works/Exercices"> Exercices </Link>
    </li>
    <li>    
      <Link to="/Works/CaseStudy"> Case Study </Link>
    </li>
    <li>    
      <Link to="/Works/ConcretCase"> Concret Case </Link>
    </li>
  </ul>
  </nav>
  </>
  )
}
export default Works;
