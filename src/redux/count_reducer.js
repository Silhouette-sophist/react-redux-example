import { INCREMENT, DECREMENT } from "./constants";

/**
 * reducer，加工状态并返回新的状态对象
 */
export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.data };
    case DECREMENT:
      return { value: state.value - action.data };
    default:
      return state;
  }
};