import React from 'react';
import { Link } from 'react-router-dom';

const ButtonList = ({ categories }) => {
    
  return (
    <div>
      {categories.map((category) => (
        <button key={category} >
          <Link to={`/${category}`}>{category}</Link>
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
