import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    // need props arugment for a class with a state
    constructor(props){
        //Registers class as a react component. Need it for a componenet that has a state
        super(props);
        // Our intial state for our todo list 
        // We initialize our state when we create the component at top
        this.state = {
        //Empty array to put our tasks into 
        items: []
        };
        // When instance is created the function will be binded to "this" of the instance
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    //  e = event argument 
    addItem(e) {
        // Creating the Item
        // If it is NOT blank then loop will start
        if (this._inputElement.value != ""){
            //new variable named newItem that stores a object
            var newItem = {
                text: this._inputElement.value,
                //Key that stores a unique time
                key: Date.now()
            };

            //State of items array getting previous state and concat the new items to it 
            //prevState 
            this.setState((prevState) => {
                return{
                    //prevState is just the states previous state it was in 
                    //The previous state and the current state concat into a brand new array with the new item in it.
                    items: prevState.items.concat(newItem)
                }
            }


            );
            // Here the new items for the Todo List will be shown to the console
            console.log(this.state.items);
        }
        
        
        

        // Creates a new object named newItem and gives it a text key pair values
        // The value of the inputElement is stored in the text variable
        // The key helps us keep track of multiple items we are inputting. Gives us a precise number when we got our value
        
        // A form when submitted tries to send it somewhere do this prevents the page from reloading.  
        e.preventDefault();
        
      }
      
      
      deleteItem(key){
        
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key)
        });
        
        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
            <div className="todoListMain">
            <div className="header">
            {/* Form event handler where when we submit something to the form the addItem method is called  */} 
            <form onSubmit={this.addItem}>
            
            {/* in our input tag we are using a ref attribute to access the input Element 
            is going to be stored in a variable local to this component 
            input element is where our form submission is going to be stored
            */}
            
            <input ref={(a) => this._inputElement = a}
            /* placeholder is the grey text we see before we start typing */
            placeholder="Please Enter A Task">
            </input>
            {/* Button for user to click when they want to add their task */ }
            <button type="submit">Add</button>
            </form>
            </div>
            {/* Here the new items for the Todo List will be shown to the user 
                and allow us to delete them as well */}
            <TodoItems entries={this.state.items}
                        delete={this.deleteItem}/>

            </div>
        );
    }
}

export default TodoList;