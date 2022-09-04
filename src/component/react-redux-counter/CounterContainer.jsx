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
  

  /**
   * react-redux提供了connet，用于关联redux和UI组件
   * - 从redux-store传递到容器组件，再由容器组件通过props传递状态和dispatch
   *    - redux的store直接通过<CounterContainer store={store}>将store传递给了容器组件（如果多次可用Provider）
   *    - 容器组件通过mapStateToProps将store中存的状态映射作为props传递给UI组件，容器组件通过mapDispatchToProps将store中存的修改状态的方式，即dispatch- action也映射为组件的props
   * 
   * - 从UI组件通过props既可以展示数据，也可以通过dispatch传递过来的action函数间接修改redux-store中的状态
   *    - UI组件接受到的普通属性，就是直接展示数据，常规props属性（readonly）
   *    - UI组件接受到的dispatch-action属性，就是为了接受View的操作，然后通过这些函数式属性的调用来影响redux-store的状态
   * 
   * 
   * - 从状态更新通知
   *    - 只使用redux，需要在index.jsx中store.subscrie，来通过UI该刷新。或者在UI组件的componentDidMount中订阅store的变化，this.setState({})这种虚晃一枪，可以触发UI更新，后续进行虚拟DOM比对确定哪些DOM需要变化
   *    - 结合redux和react-redux，connect既关联了store-state和UI组件，同时也通过容器组件在store-state变化时，主动更新UI，所以就没必要在index.jsx中订阅store的变化了！！！
   * 
   */
  export default connect(
    mapStateToPorps,
    mapDispatchToPorps
  )(Counter);
  