import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const style = {
            padding: 10,
            marginTop: 10
        }
        return (
            <div style={style} className="App">
                <input type="checkbox" checked={this.props.item.completed && "true"}></input>{this.props.item.text}
            </div>
        )
    }
}

export default TodoItem
