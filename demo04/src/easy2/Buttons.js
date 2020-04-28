import React, { useContext } from 'react';
import { ColorContent, UPDATA_COLOR} from './colors'
function Buttons() {
    // 获取连接器 拿到对应的dispatch通过执行
    let { dispatch } = useContext(ColorContent);
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATA_COLOR, color: 'yellow'})}}>黄色</button>
            <button onClick={()=>{dispatch({type:UPDATA_COLOR, color: 'blue'})}}>蓝色</button>
        </div>
    )
}
export default Buttons
