// App.jsx
import React from 'react';
import LikeCounter from './components/LikeCounter';  
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Redux Like Counter App</h1>
        <LikeCounter />
      </div>
    </>
  );
}

export default App;
