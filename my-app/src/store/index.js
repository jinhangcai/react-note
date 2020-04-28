// store必须是唯一的 全局只有一个  store只能自己改变自己 不能通过其他方式改变
import {createStore, applyMiddleware, compose} from 'redux';
import Saga from 'redux-saga';
// import thunk from 'redux-thunk'; // redux 中间件
import reducer from './reducer';
import sagaMiddleware from './sagas'
const sagaMid = Saga();
const composethunk = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_({}) : compose;
// const echer = composethunk(applyMiddleware(thunk)); // thunk中间件
const echer = composethunk(applyMiddleware(sagaMid)); // saga中间件
const store = createStore(reducer, echer);
sagaMid.run(sagaMiddleware);
export default store;
