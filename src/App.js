import React, {Component} from 'react';
import './style.css';

class App extends Component{

 constructor(props){
  super(props);
  this.state = {
   numero: 0,
   botao: 'Start'
  };
  this.timer = null;
  this.start = this.start.bind(this);
  this.limpar = this.limpar.bind(this);
 }


 start(){

  let state = this.state;

  if(this.timer !== null){
   clearInterval(this.timer);
   this.timer = null;
   state.botao = "Start";
  } else{
   this.timer = setInterval(()=>{
    let state = this.state;
    state.numero += 0.1;
    this.setState(state);
     },100)
     state.botao = "Stop";
  }

  this.setState(state);
 }

 limpar(){
  if(this.timer !== null){
   clearInterval(this.timer);
   this.timer = null;
  }
  let state = this.state;
  state.numero = 0;
  state.botao = "Start";
  this.setState(state);
 }

 render(){
  return(
   <div className="container">
    <img src={require('./assets/cronometro.png')} alt="Imagem cronometro"/>
    <a>{this.state.numero.toFixed(2)}</a>
    <div className="areaBtn">
     <a onClick={this.start}>{this.state.botao}</a>
     <a onClick={this.limpar}>Limpar</a>
    </div>
   </div>
  )
 }
}

export default App;