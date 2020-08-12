import React from 'react';
import logo from './logo.svg';
// import { Button } from 'semantic-ui-react';
// import { Header } from 'semantic-ui-react';
// import { Form } from 'semantic-ui-react';
// import { Segment } from 'semantic-ui-react';
// import { Grid } from 'semantic-ui-react';

import { Button, Header, Form, Segment, Grid, Message } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'; 
import './App.css';
import Register from './Register';
function App() {
  return (
    <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/register'>
         <Register/>
       </Route>
     </Switch>
   </Router>
  );
 }
 

// function App() {
//   return (
//       <Register/>

//     // <div className="App">
//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     //   <Button class="ui button"> Aku bisa bikin Button </Button> */}

//     //   <Segment compact>
//     //     <Header textAlign ='center'>
//     //       HELLO WORD
//     //     </Header>
//     //     <Form>
//     //       <Form.Field>
//     //         <label>
//     //           Email
//     //         </label>
//     //         <input placeholder = 'Masukkan Email Anda'/>
//     //         <label>
//     //           Password
//     //         </label>
//     //         <input placeholder = 'Masukkan Password Anda' type = 'Password'/>
//     //       </Form.Field>
//     //     </Form>
//     //   <Button color="green"> Daftar Dulu </Button>
//     //   </Segment>

//     //   <Segment compact>
//     //     <Header as='h1'>
//     //       Terimakasih sudah belajar bersama kami.
//     //     </Header>
//     //     <Header as='h2'>
//     //       Jangan lupa untuk join workshop kita yang lain ya!
//     //     </Header>
//     //     <Message color='green'>
// 	  //       Semoga ilmunya bermanfaat :)
//     //     </Message>
//     //   </Segment>

//     // </div>
//   );
// }

export default App;
