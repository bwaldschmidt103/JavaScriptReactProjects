import React from 'react';
import ReactDOM from 'react-dom';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

ReactDOM.render(
  <ul>
    {months.map((month, index) => (
      <li key={index}>{month}</li>
    ))}
  </ul>,
  document.getElementById("root")
  );