import React, { Component } from 'react';

import AddItem from '../AddItem';

class CheckList extends Component {

    constructor(props) {
        super(props)

        // Default items for testing
        localStorage.setItem("todo", '["Test Item", "Test Item 2"]');
        localStorage.setItem("completed", '[]');

        this.state = {
            todo: JSON.parse(localStorage.getItem("todo")) || [],
            completed: JSON.parse(localStorage.getItem("completed")) || []
        }

        this.addedItem = this.addedItem.bind(this);
    }

    changeState(position, direction) {
        if (direction === "completed") {
            // Add to completed
            this.state.completed.push(this.state.todo[position])

            // Remove from todo
            this.state.todo.splice(position, 1)
        } else if (direction === "todo") {
            // Add to todo
            this.state.todo.push(this.state.completed[position])

            // Remove from completed
            this.state.completed.splice(position, 1)
        }

        localStorage.setItem("completed", JSON.stringify(this.state.completed))
        localStorage.setItem("todo", JSON.stringify(this.state.todo))
        this.setState(this.state)
    }

    addedItem() {
        this.setState({
            todo: JSON.parse(localStorage.getItem("todo")) || [],
            completed: JSON.parse(localStorage.getItem("completed")) || [],
        })
    }

    render() {
        let todo_items = [];
        for (let i = 0; i < this.state.todo.length; i++) {
            todo_items.push(
                <li className="todo-item" key={i} onClick={() => this.changeState(i, "completed") }>
                    { this.state.todo[i] }
                </li>
            )
        }

        let completed_items = [];

        for (let i = 0; i < this.state.completed.length; i++) {
            completed_items.push(
                <li className="completed-item" key={i} onClick={() => this.changeState(i, "todo")}>
                    { this.state.completed[i] }
                </li>
            )
        }

        return (
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Todo
                            </p>
                        </header>
                        <div className="card-content">
                            <AddItem addedItemHandler={ this.addedItem }/>
                            <br />
                            { todo_items }
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Completed
                            </p>
                        </header>
                        <div className="card-content">
                            { completed_items }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckList;