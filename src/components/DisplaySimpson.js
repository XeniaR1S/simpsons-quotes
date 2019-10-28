import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img src={simpson.image} alt={simpson.character}/>
      <ul>
        <li>
          Name: {simpson.character}
        </li>
        <li>
          Citation: {simpson.quote}
        </li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;