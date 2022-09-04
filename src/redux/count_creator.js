import { DECREMENT, INCREMENT } from "./constants";

/**
 * 创建增加的action
 *
 * @param {*} data
 */
export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data,
});

/**
 * 创建减少的action
 *
 * @param {*} data
 */
export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data,
});