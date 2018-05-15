import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            item: ""
        }
    }

    addItem(item) {
        if(item) {
            let localTodo = JSON.parse(localStorage.getItem("todo")) || []

            localTodo.push(item)
            localStorage.setItem("todo", JSON.stringify(localTodo))

            this.props.addedItemHandler()

            this.setState({
                    item: ""
            })
        }
    }

    handleChange(event) {
        this.setState({item: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input" name="add-todo" value={ this.state.item } onChange={this.handleChange} />
                    </div>
                    <div className="control">
                        <a className="button is-info" onClick={() => this.addItem(this.state.item)}>Add</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItem;