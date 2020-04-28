import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
let names = ['a', 'b', 'c'];
// function App() {
// function app(props) {
//     console.log(props)
//     return (
//         names.map(function(name, index){
//            return   <div key={index}>hello,{name} 我是</div>
//         })
//     )
// }
// class fn extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {date: new Date(), name: 'xxx', title: props.title || 'abc'};
//     }
//     componentWillMount() {
//         console.log('初始化前')
//     }
//     componentDidMount() {
//         console.log('初始化完成')
//
//         // 通过refs 获取真实节点的dom
//         let initialNode  =  ReactDOM.findDOMNode(this.refs.myComp);
//         // initialNode.focus()
//         console.log(initialNode)
//         console.log(this.isMounted)
//     }
//     componentWillReceiveProps() {
//         console.log('接受到新的prop或者更新后 被调用')
//     }
//     shouldComponentUpdate() {
//         console.log('返回一个布尔值。在组件接收到新的props或者state时被调用')
//         return true;
//     }
//     componentWillUpdate() {
//         console.log('数据更新前')
//     }
//     componentDidUpdate() {
//         console.log('数据更新后')
//     }
//     componentWillUnmount() {
//         console.log('组件移除后执行')
//     }
//     handclick(e) {
//         console.log(this)
//         // this.setState({
//         //     title: 'abc'
//         // });
//         this.setState((state)=>{
//             console.log(state)
//             return {title: state.title + 1}
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//             <header className="App-header">
//             {app(this.state)}
//             <input ref='myComp' value={this.state.title} />
//             <img src={logo} className="App-logo" alt="logo" />
//             <p onClick={(e)=> {this.handclick(e)}} >
//             {this.state.date.toLocaleTimeString()} 我是默认title{this.state.title}
//             Edit <code>src1/App.js</code> and save to reload.
//             </p>
//             <p onClick={()=> {this.handclick1()}}>
//                 点击我
//             </p>
//             <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener no  referrer"
//             >
//             Learn React
//             </a>
//             </header>
//             </div>
//             );
//     }
// }
// fn.propTypes= {
//     // 设置PropTypes属性检查
//     title: PropTypes.string
// }
// fn.defaultProps= {
//     // 设置默认的props值
//     title: 'hello world'
// }
// }

export default fn;
