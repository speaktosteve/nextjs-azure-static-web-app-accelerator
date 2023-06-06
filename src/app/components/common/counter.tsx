'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>
    </div>
  );
};
