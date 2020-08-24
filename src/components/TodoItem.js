import React, { Component } from 'react';


class TodoItem extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        // GET the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.attribute !== this.props.attribute) {
            // do something here
        }
    }

    shouldComponentUpdate() {
        // return true if want it to update
        // return false if not to update
    }

    componentWillUnmount() {
        // teardown or clean up event / code before your components disappers
        // eg. remove event listener
    }

    getSnapshotBeforeUpdate() {
        // backup of current props
    }

    render() {
        const style = {
            padding: 10,
            marginTop: 10
        }
        return (
            <div style={style} className="App">
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)} />
                {this.props.item.text}
            </div>
        )
    }
}

export default TodoItem
