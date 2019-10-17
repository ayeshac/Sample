import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayList from "./DisplayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      arr : []
    }
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }

  onSubmitButton = (event) => {
    event.preventDefault();
    var newArr = this.state.arr;
    newArr.push(this.state.value);
    this.setState({...this.state,arr:newArr})
    
  }

  handleChange = (event) => {
    let v=event.target.value;
    this.setState({
      ...this.state,value:v
    });
    console.log(event.target.value);
  }

  removeItem = i => {
    let newItemArr=this.state.arr;
    newItemArr.splice(i,1);
    this.setState({...this.state,arr:newItemArr})
  }
  render(){
    console.log(`this is total array ${this.state.arr}`);
    return (
      
     <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form className="form-group" onSubmit={this.onSubmitButton}>
            <input type="text" className="input" onChange={this.handleChange}/>
            <input type="submit" />
          </form>
          <DisplayList arr={this.state.arr} changed={this.removeItem}/>
          
        </header>
      </div>
    );
  }
  
}

export default App;
