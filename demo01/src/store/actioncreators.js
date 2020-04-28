import { ADD_ITEMS, CHANGE_INPUT } from './actionTypes';

export const change_input = (data) => ({
    type: CHANGE_INPUT,
    data
});

export const add_items = () => ({
    type: ADD_ITEMS
})
