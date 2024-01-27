import React from 'react';
import { incrementLike, decrementLike } from './Actions';

const Actions = () => {
  // You can use incrementLike and decrementLike here
  const handleIncrement = () => {
    const action = incrementLike();
    // Dispatch the action or perform any other logic
  };

  const handleDecrement = () => {
    const action = decrementLike();
    // Dispatch the action or perform any other logic
  };

  return (
    <div>
      {/* Your component rendering logic */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Actions;