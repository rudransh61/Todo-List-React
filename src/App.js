import './App.css';
// import {List} from './List.js';
import React, { useState } from 'react'


function List (props) {
  return (
    <div>
      <input type="checkbox"/>
      <label for="vehicle1">
         {props.task}
      </label>
    </div>
  )
}


function App() {
  const [list , change] = useState([]);
  const add = () => {
    let val1 = document.querySelector('#but').value;
    console.log(val1);
    change( list => [...list, val1]);
    console.log(list);
  }

  const del = () => {
    change(list.slice(0,-1));
  }




  return (
    <div className="App bg-slate-400">
      <h>Todo List</h>
      <button id="add" onClick={add}>Add+</button>
      <button id="del" onClick={del}>Delete-</button>
      <hr />
      {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/><label for="vehicle1"> I have a bike</label><br></br> */}
      <input type="text" id="but" placeholder="Write here!" />
      <div>

        {console.log(list)}
        {
          list.map((i)=>{
            return <List task={i}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
