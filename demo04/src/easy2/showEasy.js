import React, {useContext} from 'react';
import { ColorContent } from './colors'
function ShowEasy() {
    // 获取连接器 拿到对应的value值
    let { color } = useContext(ColorContent);
    console.log(color)
    return (
        <div style={{color: color}}>
            字体颜色为blue
        </div>
    )
}
export default ShowEasy;
