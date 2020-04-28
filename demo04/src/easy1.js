import React, { useReducer} from 'react';
function Easy1() {
    let [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state +1
            case 'sub':
                return state -1
            default:
                return state
        }
    }, 0)
    return(
        <div>
            <div>现在的分数是{count}</div>
            <button onClick={()=> {dispatch('add')}}>加</button>
            <button onClick={()=> {dispatch('sub')}}>减</button>
        </div>
    )
}
export default Easy1
