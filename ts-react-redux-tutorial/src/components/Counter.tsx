import React from "react";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={() => onIncreaseBy(5)}>5씩증가</button>
    </div>
  );
};

export default Counter;
