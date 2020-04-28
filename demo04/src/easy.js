// react hooks  常用方法
// useState：设置变量级方法
// useEffect：生命周期
//createContext:设置连接器  useContext：获取连接器的值  主要用于 父传子值  代替props
// useReducer 设置reducer方法
// useMemo  控制子组件的方法回调  优化性能
import React, { useState, useEffect, createContext, useContext} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const CountContext = createContext();
function List() {
    useEffect(() => {
        console.log('执行1')
        return () => {
            console.log('gg1')
        }
    }, []);
    return (
        <div>我是谁</div>
    )
}
function Data() {
    useEffect(() => {
        console.log('执行2')
        return () => {
            console.log('gg2')
        }
    }, []);
    return (
        <div>皮卡丘</div>
    )
}
function Num() {
    let count = useContext(CountContext);
    return (
        <div>我是计数器 {count}</div>
    )
}
function Easy() {
    let [age, setCount1] = useState(0);
    let [sex] = useState('男');
    let [work] = useState('it');

    return (
        <Router>
            <div>
                <p>{age} {sex} {work}</p>
                <button onClick={()=>{setCount1(++age)}}>点击我</button>
                <CountContext.Provider value={age}>
                    <Num />
                </CountContext.Provider>
                    <ul>
                        <li><Link to='/List'>点我List</Link></li>
                        <li><Link to='/data'>点我data</Link></li>
                    </ul>
                    <Route path='/List' component={List} />
                    <Route path='/data' component={Data} />
            </div>
        </Router>
    )
}
export default Easy
