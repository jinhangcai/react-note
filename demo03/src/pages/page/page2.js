import React from 'react';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import workPage1 from '../work/page1'
import workPage2 from '../work/page2'
import workPage3 from '../work/page3'
import '../../index.css'
function page2() {
    return (
       <Router>
           <div>
               <ul className='header-List'>
                   <li><Link to='/page2/workPage1'> 阿里 </Link></li>
                   <li><Link to='/page2/workPage2'> 腾讯 </Link></li>
                   <li><Link to='/page2/workPage3'> 百度 </Link></li>
               </ul>
               <div>
                   <Route path='/page2' exact render={()=> (
                       <Redirect to='/page2/workPage1'/>
                   )}/>
                   <Route  path='/page2/workPage1' component={workPage1} />
                   <Route  path='/page2/workPage2' component={workPage2} />
                   <Route  path='/page2/workPage3' component={workPage3} />
               </div>
           </div>
       </Router>
    )
}
export default page2;
