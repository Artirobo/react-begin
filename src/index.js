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



function tick() {
  const element1 = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>

      {/* added clock component */}
        <Clock date={new Date()} />,

    </div>
  );
  // it search as id and added tick in that element
  ReactDOM.render(element1, document.getElementById('as'));
}
setInterval(tick, 1000);


function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
const elementwithDiv = <div />;

const elementCustomComponent = <Welcome name="Sara" />;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//Extracting Components
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      
      {/* <div className="UserInfo"> */}
        {/* <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
        
        
        {/* <Avatar user={props.author} />

        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div> */}

        <UserInfo user={props.author} />


      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

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

                  {elementwithdiffStructure.type}
                  {elementwithdiffStructure.props.children}
                   {/* it is for tick function */}
                  <h1 id="as">

                  </h1>
                  
                  {elementwithDiv}


                  {elementCustomComponent}
                  {/* Composing Components */}
                  <App/>
                
                  <Comment
                          date={comment.date}
                          text={comment.text}
                          author={comment.author}
                          />
                </h1>;
//Composing Components
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  element,
  document.getElementById('root')
);