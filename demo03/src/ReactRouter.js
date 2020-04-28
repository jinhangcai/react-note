import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import page1 from './pages/page/page1'
import page2 from './pages/page/page2'
import page3 from './pages/page/page3'
import './index.css'
function ReactRouter() {
    return (
        <Router>
            <div className='ReactRouter'>
                <div className='ReactRouterNav'>
                    <div>我是一级路由首页</div>
                    <ul>
                        <li><Link to='/'>内容1</Link></li>
                        <li><Link to='/page2'>内容2</Link></li>
                        <li><Link to='/page3'>内容3</Link></li>
                    </ul>
                </div>
                <div className='ReactRouterMain'>
                    <Route exact path='/' component={page1} />
                    <Route  path='/page2' component={page2} />
                    <Route  path='/page3' component={page3} />
                </div>
            </div>
        </Router>
    )
}

export default ReactRouter
