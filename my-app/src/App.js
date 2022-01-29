
import './App.css';
import React, { Component } from 'react';
import loading from './components/loading.gif'
import Users from './components/Users';






export default class App extends Component {
  state= {
    visible: false,
    loading:false
  }
  showUsers=async event =>{
    event.preventDefault();
    this.setState.loading= true;
 this.setState({ visible: true});
 this.setState.loading= false;
  }
 
     render() {
    return(  
    <div >
        
         <div >
            <nav className="navbar navbar-dark bg-danger">
            <div className="container-fluid">
            <h1 className="heading">LGMVIP</h1>
            <form className="d-flex">
            <button className="btn btn-outline-light" onClick={this.showUsers} type="submit">GET USERS</button>
           
            </form>
            </div>
            </nav>
          </div>

           {this.setState.loading && <img src={loading} alt='loading..please wait'/>}
         {this.state.visible ?<div className='DIV2 my-2 '> <Users /></div> :null}
         
         
        
     </div>
    )
  }
}


