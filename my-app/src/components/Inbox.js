import React from 'react'
import {Link} from 'react-router-dom'
class fn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:1, title:'dfsfgs'},
                {id:2, title:'dfdsffsfgs'},
                {id:3, title:'dfsfdsafcvfgs'},
            ]
        }
    }
    render() {
        return (
            <div className='what'>
                <div className='what1'>
                    {
                        this.state.list.map((item) => {
                            return (
                                <div key={item.id}><Link to={/list/ + item.id}>{item.title}</Link></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};
export default fn;
