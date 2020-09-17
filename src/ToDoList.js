import React, { Component } from 'react'


const ToDoList = (props) =>{
 return(
  <>
    <div className="listpart">
      <button className="delet"  onClick={() => {
                      props.onSelect(props.id);
                      }} 
      >Delete</button>
  <li> {props.text} </li>
    </div>
  </>
 ); 
};
export default ToDoList;