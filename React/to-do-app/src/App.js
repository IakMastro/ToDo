import React from 'react'
import './App.css'

class Task extends React.PureComponent {
    render() {
        return(<li>{this.props.name}</li>)
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            task: '',
            tasks: []
        }

        this.addToList = this.addToList.bind(this)
    }

    addToList() {
        this.state.tasks.push(this.state.task)
    }

    handleChange = (e) => {
        const {name: fieldName, value} = e.target

        this.setState({[fieldName]: value})
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.tasks.map((task, index) => <Task key={index} name={task}></Task>)}
                </ul>

                <div>
                    <label htmlFor="task">Thing To Add:</label>
                    <input type="text" name="task" id="task" task={this.state.task} onChange={this.handleChange.bind(this)}/>
                </div>

                <button onClick={this.addToList}>Add</button>
            </div>
        )
    }
}

export default List;
