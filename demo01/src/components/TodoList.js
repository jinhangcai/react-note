import React from 'react';
import { connect } from 'react-redux';
import { add_items, change_input } from '../store/actioncreators'

const TodoList = (props) => {
    let {inputValue, inputChange, haldClick, list} = props;
    return (
        <div>
            <div>
                <input  value={inputValue} onChange={inputChange} />
                <button onClick={haldClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};
// class TodoList extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input  value={this.props.inputValue} onChange={this.props.inputChange} />
//                     <button onClick={this.props.haldClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) => {
//                                 return (
//                                     <li key={index}>{item}</li>
//                                 )
//                             }
//                         )
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

const stateProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const dispatchProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = change_input(e.target.value);
            dispatch(action);

        },
        haldClick() {
            let action = add_items();
            dispatch(action);
        }
    }
}
export default connect(stateProps, dispatchProps)(TodoList) ;
