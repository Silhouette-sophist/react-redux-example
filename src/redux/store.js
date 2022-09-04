import { createStore } from "redux";
import countReducer from './count_reducer'

/**
 * 创建store，托管的状态由reducer中确定
 */
export default createStore(countReducer)