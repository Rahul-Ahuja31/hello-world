import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Counter/> */}
        <Message/>
        {/* <Greet name='Rahul'/>
        <Greet name='Chirag'/> */}
      </div>
    );
  }
}

export default App;