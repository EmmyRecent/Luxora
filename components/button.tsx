"use client";

import { useState } from "react";

export default function CustomButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button
        className="bg-green-400 p-4 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}
