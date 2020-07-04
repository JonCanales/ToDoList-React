import React, {Component} from "react";


// Here this component will be the part of the ToDo-List that will show the user their tasks they need to do/entered
class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this)
    }
    
    
    // Method Here to create the tasks 
    createTasks(item) {
        // Returning the object items that store the key and text  
        //Onlick event will delete the task
        return <li onClick = { () => this.delete(item.key) }
                    key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }
    
    render(){
        // Creating two new variables 
        //todoEntries will be the entries of the prop
        //listItems will store the todoentries but then map to iterate through every item in createTasks
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            // printing out a unordered list that shows the listItems variable 
            <ul className="theList">
                {listItems}
            </ul>
        );
    }

};



export default TodoItems;