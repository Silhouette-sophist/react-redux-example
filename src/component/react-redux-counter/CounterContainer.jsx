import { connect } from "react-redux";
import Counter from "../counter";
import { createIncrementAction, createDecrementAction } from "../../redux/count_creator";

/**
 * 将传递给容器组件的store中的状态（getState）映射到UI组件的props的字段上
 *
 * @param {*} state
 * @returns
 */
 function mapStateToPorps(state) {
    return {
      value: state.value,
    };
  }
  
  /**
   * 将传递给容器组件的store中修改状态的方法（dispatch）映射到UI组件的props的字段上
   *
   * @param {*} dispatch
   * @returns
   */
  function mapDispatchToPorps(dispatch) {
    return {
      increment: (data) => dispatch(createIncrementAction(data)),
      decrement: (data) => dispatch(createDecrementAction(data)),
    };
  }
  
  export default connect(
    mapStateToPorps,
    mapDispatchToPorps
  )(Counter);
  