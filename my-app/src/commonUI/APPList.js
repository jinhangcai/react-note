// 有状态组件属于components继承 里面有生命周期已经this属性     无状态组件一个函数 没有生命周期和this 通过props获取父元素传值
import React from 'react';
import {Button, Input, List} from "antd";
// 无状态组件
const AppList = (props) => {
    return (
        <div className='what' style={{margin:'10px'}}>
            <div className='what1'>
                <Input
                    placeholder={props.placeholder} style={{width: '250px'}}
                    onChange={props.onchangeValue}
                    value={props.placeholder}
                />
                <Button
                    type='primary'
                    onClick={props.clickbtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px', width:'300px'}}>
                <List
                    bordered
                    dataSource={props.name}
                    renderItem={(item, index) => (<List.Item>
                        {item.a}
                        <Button type='primary' style={{float:'right'}} onClick={() => {props.deledebtn(index)}}>删除</Button>
                    </List.Item>)}
                />
            </div>
        </div>
    );
}
// 有状态组件
// class AppList extends Component {
//     render() {
//         return (
//             <div className='what' style={{margin:'10px'}}>
//                 <div className='what1'>
//                     <Input
//                         placeholder={this.props.placeholder} style={{width: '250px'}}
//                         onChange={this.props.onchangeValue.bind(this)}
//                         value={this.props.placeholder}
//                     />
//                     <Button
//                         type='primary'
//                         onClick={this.props.clickbtn.bind(this)}
//                     >增加</Button>
//                 </div>
//                 <div style={{margin:'10px', width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.name}
//                         renderItem={(item, index) => (<List.Item>
//                             {item}
//                             <Button type='primary' style={{float:'right'}} onClick={() => {this.props.deledebtn(index)}}>删除</Button>
//                         </List.Item>)}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default AppList;
