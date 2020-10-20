import React from 'react';
import './App.css';
import Student from './student.js';


function App(props) {

  return <div>
  <h1 > BOOTCAMP2020 CLASS {props.session} ({props.class} Class)</h1>
  <h2>ASSIGNMENT no. {props.assignment}</h2>
  <h2> Topic: "REACT TUTORIAL" by {props.teachers}</h2>
<br />
<br />
<br />
<br />

<Student name= "Hina Zargham" hello="student.js"/>

</div>

}

export default App;
