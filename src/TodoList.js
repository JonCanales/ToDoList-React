import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        // Our intial state for our todo list 
        this.state = {
        //Empty array to put our tasks into 
        items: []
        };

        this.addItem = this.addItem.bind(this);
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
                    items: prevState.items.concat(newItem)
                }
            }


            );

        }

        

        // Creates a new object named newItem and gives it a text key pair values
        // The value of the inputElement is stored in the text variable
        // The key helps us keep track of multiple items we are inputting. Gives us a precise number when we got our value
        
        // A form when submitted tries to send it somewhere do this prevents the page from reloading.  
        e.preventDefault();
        
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
            <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;