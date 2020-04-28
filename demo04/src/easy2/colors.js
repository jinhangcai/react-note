
import React, { createContext, useReducer} from 'react';

// 创建连接器
export const ColorContent = createContext({});
//设置变量常量
export const UPDATA_COLOR = 'UPDATA_COLOR';
export const Color = (props) => {

    //设置reducer
    const reducer = ((state, action) => {
        switch (action.type) {
            case UPDATA_COLOR:
                return action.color;
            default:
                return state
        }
    });

    // 通过useReducer设置初始化reducer
    const [color, dispatch] = useReducer(reducer, 'blue');

    return (
        <ColorContent.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContent.Provider>
    )
}
