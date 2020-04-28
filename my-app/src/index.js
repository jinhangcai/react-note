import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// IndexRoute, hashHistory, Redirect,
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import App from './App';
import App1 from './components/App';  // 导入App组件
import About from './components/About'; // 导入About组件
import Inbox from './components/Inbox'; // 导入Inbox组件
import List from './components/List'; // 导入List组件
import * as serviceWorker from './serviceWorker';
export default class Hello extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <ul className="nav">
                        <li><Link to="/">App1</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Inbox">Inbox</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={(props) => <App1 {...props} />} />
                    <Route path="/About" component={(props) => <About {...props} />} />
                    <Route path="/Inbox" component={(props) => <Inbox {...props} />} />
                    <Route path="/list/:id" component={(props) => <List {...props} />} />
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
