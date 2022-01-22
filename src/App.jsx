import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import List from './components/List'

// anything that can be changed should be put into state: the text and the list

function App() {
  
    
    const [lists, setLists] = useState([]);
    const [text, setText] = useState("");

const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.length === 0){
        return;
    }
    const newList = {
        text: text,
        checked: false
    }
    
    setLists([...lists, newList]);
    setText("");
    console.log("you have submitted!");
}

const handleToggle = (index) => {
    const crossOffList = lists.map((lists, i) => {
      if(index === i){
        lists.checked = !lists.checked
      }
      return lists;
    })
    setLists(crossOffList)
}

const lineThrough = [];
if(lists.checked){
  lineThrough.push("line-through")
}

    

    const onDeleteHandler = (index) => {
    const newArray = [...lists];
    newArray.splice(index, 1);
    setLists(newArray);
    // by putting newArray in parentheses, we are saying that is setLists instead of setLists = newArray?
}


    return(
        <div className="App w-50 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className="row mb-5">
                    <div className="col">
                      <h1>To Do List!</h1>
                        <input  type="text" value={text} className='form-control' onChange={(event)=>{setText(event.target.value)}} />
                        {/* value={text} forces the input box to reset to the new value of the text state which is empty from onsubmit function */}
                    </div>
                </div>
                <input type="submit" value="Add" className="btn btn-success mb-3" />
            </form>
            { 
            lists.map((lists, i) => {
                  return <div>
                  <li key={i} index = {i} onDeleteHandler={onDeleteHandler} text={lists.text} >
                  
                  <input type="checkbox" onClick={() => {handleToggle(i)}}  />
                  <span style={{textDecoration: lists.checked && 'line-through'}} className={lineThrough.join(" ")}>{lists.text} </span>
                  <button style={{ marginLeft: "5px" }} onClick={() => {onDeleteHandler(lists.index) }}>Delete</button>
                  </li> 
                </div>
            })
        }
        </div>
    );


}

export default App;
