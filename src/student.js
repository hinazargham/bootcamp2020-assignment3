import React from 'react';
import './App.css';

function Student(props) {


  return (

    <div>
        <h3>Hello from child component ie. "{props.hello}" file </h3>
        <br/>
        <br/>
        <br/>
        <p><i>Submitted by {props.name}</i></p>
    </div>
  )
}

export default Student;
