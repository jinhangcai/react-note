import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from './actionTypes'
import actioncreators from './actioncreators'
import axios from 'axios'
function* saga() {
    yield takeEvery(actionTypes.ACTION_SAGA, getList);
}
function* getList() {
    console.log('测试')
    const res = yield axios.get('http://yapi.demo.qunar.com/mock/102425/ceshi');
    const action = actioncreators.AXIOS_CREATE(res.data);
    console.log(action)
    yield put(action);
}
export default saga;
