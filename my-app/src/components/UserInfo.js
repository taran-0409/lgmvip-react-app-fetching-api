import React, { Component } from 'react';

export class UserInfo extends Component {
  render() {
    let { imgUrl, fname, lname, email} = this.props;
    return <div className='DIV1'>
             <div className="card card1"  >
                <img src={imgUrl} className="card-img-top img1" alt="user"/>
                <div className="card-body">
                  <h3 className='flex'> {fname}</h3>
                  <h3 className='flex'>{lname}</h3>
                  <h4 >{email}</h4>
              
                </div>
              </div>
            </div>;
  }
}

export default UserInfo;
