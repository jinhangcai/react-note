import { ADD_ITEMS, CHANGE_INPUT } from './actionTypes';
const defaultState = {
    inputValue: 'ceshi',
    list: []
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        const CHANGE_INPUT = JSON.parse(JSON.stringify(state));
        CHANGE_INPUT.inputValue = action.data;
        return CHANGE_INPUT;
    }
    if (action.type === ADD_ITEMS) {
        const ADD_ITEMS = JSON.parse(JSON.stringify(state));
        ADD_ITEMS.list.push(state.inputValue);
        return ADD_ITEMS;
    }
    return state;
}
