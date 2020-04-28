import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let id = this.props.match.params.id;
        console.log(this.props)
        return (
            <div>
                cecece => {id}
            </div>
        );
    }
}

export default List;
