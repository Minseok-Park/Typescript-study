import React from "react";
import { useSampleDispatch, useSampleState } from "./SampleContext";

const ReducerSample = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  const { count, text, color, isGood } = state;

  const setCount = () => dispatch({ type: "SET_COUNT", count: count + 1 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "하이" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" });
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setCount}>증가</button>
      <h2>{text}</h2>
      <button onClick={setText}>바꾸기</button>
      <h2>{color}</h2>
      <button onClick={setColor}>바꾸기</button>
      <h2>{(isGood && "true") || "false"}</h2>
      <button onClick={toggleGood}>바꾸기</button>
    </div>
  );
};

export default ReducerSample;
