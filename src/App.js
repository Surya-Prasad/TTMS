import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/about">Admin Landing</Link>
            </li>
            <li>
              <Link to="/topics">Student Portal</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
}

function Home() {
  return (
    <div class="a-main-block">
    <div class="left-part">
      <i class="fas fa-users-cog"></i>
      <h1>Enter Admin info</h1>
    </div>
    <form action="/" method="GET">
      <div class="title">
        <i class="fas fa-pencil-alt"></i> 
        <h2>Register here</h2>
      </div>
      <div class="info">
        <input class="fname" type="text" name="adminid" placeholder="Admin Id"/>
        <input type="text" name="Password" placeholder="Password"/>
        <input type="text" name="ConfirmPassword" placeholder="Confirm Password"/>
      </div>
      <button type="submit" Link to="/about" href="/">Submit</button>
    </form>
  </div>
  );
}

function About() {
  return (
    <div class="aa-main-block">
      <div class="block-item left">
        <h1>Access Table</h1>
        <p><small>Welcome Admin, What table do you want to access ?</small>
        </p>
      </div>
      <div class="block-item right">
        <button value="Teacher"  class="btn facebook"/>Teacher
        <button class="btn twitter"/>Student
        <button class="btn google"/>Admin
      </div>
    </div>
  );
}

function Topics() {
  return (
<div class="s-main-block">
      <div class="left-part">
        <i class="fas fa-graduation-cap"></i>
        <h1>Student Detail Form</h1>
      </div>
      <form action="/">
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" name="Name" placeholder="Full name"/>
          <input type="text" name="Rollno" placeholder="Rollno"/>
          <input type="text" name="Section" placeholder="Section"/>
          <input type="text" name="Department" placeholder="Department"/>
          <input type="text" name="Semester" placeholder="Semester"/>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
  );
}

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default App;
