import React, { Component } from 'react'
import "./App.css"
import vegetaUp from "./images/up.png";
import vegetaDown from "./images/down.png";

/*
export default class Counter extends Component {
 contador = 0
  render() {
    return (
      <div className="App">
        <button>Flexion</button>
        <p>{this.contador}</p>
        <img src={vegetaUp} alt="" />
        <img src={vegetaUpDown} alt="" />
      </div>
    );
  }
}
*/

/*
export default class Counter extends Component {
  contador = 0
   
    handlePushUp() {
     this.contador = this.contador + 1
     console.log(this.contador);
   }
 
   render() {
     return (
       <div className="App">
         <button onClick={() => this.handlePushUp()}>Flexion</button>
         <p>{this.contador}</p>
         <img src={vegetaUp} alt="" />
         <img src={vegetaUpDown} alt="" />
       </div>
     );
   }
 }
*/

/*
 export default class Counter extends Component {
  constructor(){
    super();
    this.handlePushUp = this.handlePushUp.bind(this); // Dejamos fija la fn con el this
    this.state = { // Creamos un objeto con los distintos states que necesitemos
      contador: 0
    }
  }
   
    handlePushUp() {
     this.setState({contador:this.state.contador + 1}) // Actualizamos el estado
   }
 
   render() {
     return (
       <div className="App">
         <button onClick={this.handlePushUp}>Flexion</button>
         <p>{this.state.contador}</p>
         <img src={vegetaUp} alt="" />
         <img src={vegetaUpDown} alt="" />
       </div>
     );
   }
 }
*/

export default class Counter extends Component {
  constructor() {
    super();
    this.handlePushUp = this.handlePushUp.bind(this);
    this.state = { 
      contador: 0,
      vegeta: vegetaDown
    }
  }

  handlePushUp() {
    this.setState(this.state.vegeta === vegetaDown ? { vegeta: vegetaUp } : { vegeta: vegetaDown, contador: this.state.contador + 1 })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handlePushUp}>Flexion</button>
        <p>{this.state.contador}</p>
        <img src={this.state.vegeta} alt="" />
      </div>
    );
  }
}


