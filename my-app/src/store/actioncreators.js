import actionTypes from './actionTypes';
// import store from "./index";
const ADD_ITEMS = () => ({
    type: actionTypes.ADD_ITEMS,
});
const DELETE_ITEMS = (index) => ({
   type: actionTypes.DELETE_ITEMS,
   index
});
const CHANGE_INPUT = (value) => ({
    type: actionTypes.CHANGE_INPUT,
    value
});
const AXIOS_CREATE = (data) => ({
    type: actionTypes.ACTION_CREATE,
    data
});
const GET_AXIOS_APPLIST = (data) => {
    return (dispatch) => {
        setTimeout(() => {
            const List = ['wo', 'shi', 'shei'];
            let action = AXIOS_CREATE(List);
            dispatch(action);
        }, 1);
    }
};

const GET_AXIOS_SAGA = () => ({
    type: actionTypes.ACTION_SAGA
})
export default {ADD_ITEMS, DELETE_ITEMS, CHANGE_INPUT, AXIOS_CREATE, GET_AXIOS_APPLIST, GET_AXIOS_SAGA}
