import React, { Component } from 'react';

import UserInfo from './UserInfo';
import loading from './loading.gif'


export class Users extends Component {
  
  constructor(){
    super();
   console.log("hello i am here");
   this.state={
   data: [] ,
    loading:false,
    page:1
    }
   }
   prevPg=async ()=>{
 
    console.log('prev');
    let url=`https://reqres.in/api/users?page=${this.state.page - 1}`;
    this.setState.loading= true;
    let data=await fetch(url);
    let parsedData = await data.json()
    this.setState.loading= false;
    this.setState({
      page: this.state.page - 1,
      data: parsedData.data,
   
    })
   
  }
   nextPg= async ()=>{

   console.log("next");
   let url=`https://reqres.in/api/users?page=${this.state.page + 1}`;
   let data=await fetch(url);
   this.setState.loading= true;
   let parsedData = await data.json()
   this.setState.loading= false;
   this.setState({
     page: this.state.page + 1,
     data: parsedData.data,
    
   })
  }
   async componentDidMount(){

    let url="https://reqres.in/api/users?page=1";
    let data=await fetch(url);
    let parsedData = await data.json()
    this.setState({data: parsedData.data})
    console.log(parsedData);
  
  
     }
  render() {
   
    return <div className=' container my-3 mx-4'>
         <div className="d-flex justify-content-between mx-2 my-2">
         <h1 className='DIV2 my-2'> Here are the Users</h1>
         </div>
         {this.setState.loading && <img src={loading} alt='loading..please wait'/>}
        <div  className="row">
        {this.state.data.map((element)=>{
          return <div  className="col-md-4 my-3" key={element.id}>
                  <UserInfo imgUrl={element.avatar} fname={element.first_name} lname={element.last_name} email={element.email}/>
                 </div> 
         
        })}
            
        </div>
        <div className="d-flex justify-content-between mx-2 my-2">
         <button type="button" disabled={this.state.page<=1} className="btn btn-danger my-2 mx-5" onClick={this.prevPg}>&larr; PREVIOUS</button>
         <button type="button" disabled={this.state.page>=2} className="btn btn-danger my-2 mx-5" onClick={this.nextPg}>NEXT &rarr;</button>
         </div>
         
    </div>;
    
  }
}

export default Users;
