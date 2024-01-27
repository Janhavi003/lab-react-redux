// LikeCounter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const LikeCounter = () => {
  const likeCount = useSelector((state) => state.likeCount);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {likeCount}</p>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
