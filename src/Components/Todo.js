                                      //This is TOdo.js which is a class component for our web app
//Type rcc to get react class component snippet and rfc to get react functional component
import React, { Component } from 'react'  //here component is destructured obj and is similar to react.component class that we extend while using react via cdn

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[],                // state will contain an array of objects. each obj will have an id and task description
            currTask:"",     // to add more tasks by writing in the input tag
    };
    }

    handleChange=(e)=>{
         console.log(e.target.value);
         this.setState({
            currTask:e.target.value,
         });
    }

   handleSubmit= () => {
          this.setState({
            tasks:[...this.state.tasks, {task:this.state.currTask, id:this.state.tasks.length+1},
            ],
            currTask:"",
          });
   }

   handledeletetask=(id)=>{
    var narr=this.state.tasks.filter((taskObj)=>{
      return taskObj.id!=id;
    }) 
    this.setState({
      task:[...narr]
    })
   }
  
   render() {
    return (
     <div className="main-frame">
      <div className='Navbar'>
        <input type="text"
        value= {this.state.currTask}
        onChange= {this.handleChange}/>
         <button className="Submit" onClick={this.handleSubmit}>Submit</button>
         </div>
        {/* //Note that we are not calling handlesubmit func here as there is no() */ }
       {/* Use curly braces whenever you need to write js in jsx  as following*/}
        {
            this.state.tasks.map((taskObj)=> { //taskobj will have obj from tasks arr one by one
              return(  //inside return we have our jsx again so we have wrapped in<li> tag
                <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={() =>  this.handledeletetask(taskObj.id)}>Delete</button> 
                {/* //on .map in the line 47 we have used arrow function so this handledelete task works fine but if .map(function()) way would have been used we would have needed to use bind func with handledelete otherwise this of handledelete would have pointed to this inside map and not worked */}
                </li>
              );
            })
        }
     </div>
    );
  }
}
