import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Render dom 
const name = 'Josh Perez';
const user = {
  firstName: 'James',
  lastName: 'Roses'
};
const elementDiv = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const userAgent=false;

function getUsers(user){
  return user.firstName+'=='+user.lastName;
}

function getGreeting(userAgent) {
  if (userAgent) {
    return <h1>Hello, {getUsers(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const dynamicElement=React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world! from dynamic element'
);


// Note: this structure is simplified
const elementwithdiffStructure = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

const element = <h1>
                  Hello, {name}
                  <br/>
                  {getUsers(user)}
                  <br/>
                  {getGreeting(userAgent)}
                  <br/>
                  {elementDiv}
                  <br/>
                 {dynamicElement}
                 <br/>
                 {/* {elementwithdiffStructure} */}
                </h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);