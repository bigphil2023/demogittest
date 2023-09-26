// Import necessary libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a component
const App = () => {
  // Define a state variable
  const [count, setCount] = React.useState(0);

  // Increment the state variable
  const increment = () => {
    setCount(count + 1);
  };

  // Render the component
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Render the co
