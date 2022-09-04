import React from "react";
import store from "../../redux/store";
import { createIncrementAction, createDecrementAction } from "../../redux/count_creator";

export default function Counter() {
  //引用select控件
  const ref = React.useRef(null);

  const increment = () => {
    console.log("add one", store.getState().value, ref.current.value);
    store.dispatch(createIncrementAction(ref.current.value * 1));
  };

  const decrement = () => {
    console.log("decrement one");
    store.dispatch(createDecrementAction(ref.current.value * 1));
  };

  const incrementOdd = () => {
    console.log("incrementOdd one");
    if (store.getState().value % 2 !== 0) {
      store.dispatch(createIncrementAction(ref.current.value * 1));
    }
  };
  const increamentAsync = () => {
    console.log("increamentAsync one");
    setTimeout(() => {
      store.dispatch(createIncrementAction(ref.current.value * 1));
    }, 1000);
  };

  return (
    <>
      <h2>当前数值：{store.getState().value}</h2>
      <select name="num" ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &emsp;
      <button onClick={increment}>加</button>&emsp;
      <button onClick={decrement}>减</button>&emsp;
      <button onClick={incrementOdd}>奇数加</button>&emsp;
      <button onClick={increamentAsync}>异步加</button>&emsp;
    </>
  );
}
