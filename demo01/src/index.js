/*
react-redux使用方式   在根节点使用Provider包裹节点  设置store使根节点共享store
对应组件使用 通过react-redux的connect方法(连接器) 设置共享的state状态值以及dispatch值

如const stateProps = (state) => {return {inputValue: state.inputValue}};
const dispatchProps = (dispatch) => {return {inputChange(e) {const action = ADD_ITEMS_LIST(e.target.value);dispatch(action); }}}
export default connect(stateProps, dispatchProps)(TodoList) ;
当组件内调用inputChange方法时 会执行dispatchProps函数内的对应方法 然后通过dispatch派发action来执行

react-redux作为redux的增强与封装 主要是对redux的subscribe订阅进行补强让其自动监听执行 不用手动订阅
 */

// redux-thunk: 通过执行action(在action里使用接口拿到异步数据) 通过dispatch执行到reduce函数内 执行相应的操作
// redux-saga: 通过执行dispatch(saga监听到后)执行到saga函数内 执行相应的操作(yield put 会触发dispatch事件)到reduce函数内操作
// 通过redux提供的combineReducer方法 用于拆分reducer 最后合并成一个整体

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'
import {Provider} from 'react-redux';
import store from './store'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
ReactDOM.render(
  App,
  document.getElementById('root')
);
