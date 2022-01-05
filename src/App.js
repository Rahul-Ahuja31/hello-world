import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <UserGreetings/>
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <Counter/>
        <Message/>
        <Greet name='Rahul' surname='Ahuja'/>
        <Greet name='Chirag' surname='Ahuja'/> */}
      </div>
    );
  }
}

export default App;