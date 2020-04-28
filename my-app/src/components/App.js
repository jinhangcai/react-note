import React from 'react';
import store from '../store/index';
import actioncreators from '../store/actioncreators';
import {Modal} from 'antd';
import AppList from '../commonUI/APPList';
const { confirm } = Modal;
// redux-thunk: 通过执行action(在action里使用接口拿到异步数据) 通过dispatch执行到reduce函数内 执行相应的操作
// redux-saga: 通过执行dispatch(saga监听到后)执行到saga函数内 执行相应的操作(yield put 会触发dispatch事件)到reduce函数内操作
class fn extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.onchangeSet = this.onchangeSet.bind(this);
        store.subscribe(this.onchangeSet);
    }
    onchangeValue = (e) => {
        let action = actioncreators.CHANGE_INPUT(e.target.value);
        store.dispatch(action)
    };

    onchangeSet() {
        this.setState(store.getState())
    }
    clickbtn() {
        if (!this.state.placeholder) {
            confirm({
                title: 'Do you Want to delete these items?',
                icon: '',
                content: 'Some descriptions',
                onOk() {
                    console.log('OK');
                    return false;
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        } else {
            const action = actioncreators.ADD_ITEMS();
            store.dispatch(action);
        }
    }
    deledebtn(index) {
        const action = actioncreators.DELETE_ITEMS(index);
        store.dispatch(action);
    }
    componentDidMount() {
        // let action = actioncreators.GET_AXIOS_APPLIST();
        // store.dispatch(action);
        let action = actioncreators.GET_AXIOS_SAGA();
        store.dispatch(action);
    }
    render() {
        return (
            <AppList
                placeholder={this.state.placeholder}
                onchangeValue={this.onchangeValue.bind(this)}
                clickbtn={this.clickbtn.bind(this)}
                name={this.state.name}
                deledebtn={this.deledebtn.bind(this)}
            />
        )
    }
};
export default fn;
