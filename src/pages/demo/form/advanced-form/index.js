import React, { useState, useEffect } from 'react';

const wait = new Promise((resolve, reject) => {
  const timer = setTimeout(resolve, 1000);
  clearTimeout(timer);
});

export default (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect start');

    return () => {
      console.log('useEffect end');
    };
  });

  console.log('rerender');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(0)}>
        Click me
      </button>
    </div>
  );
}