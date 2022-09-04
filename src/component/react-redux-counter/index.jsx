import React from "react";

export default function Counter(props) {
  //引用select控件
  const ref = React.useRef(null);

  const increment = () => {
    console.log("add one", props.value, ref.current.value);
    props.increment(ref.current.value * 1);
  };

  const decrement = () => {
    console.log("decrement one");
    props.decrement(ref.current.value * 1);
  };

  const incrementOdd = () => {
    console.log("incrementOdd one");
    if (props.value % 2 !== 0) {
      props.increment(ref.current.value * 1);
    }
  };
  const increamentAsync = () => {
    console.log("increamentAsync one");
    setTimeout(() => {
      props.increment(ref.current.value * 1);
    }, 1000);
  };

  return (
    <>
      <h2>当前数值：{props.value}</h2>
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