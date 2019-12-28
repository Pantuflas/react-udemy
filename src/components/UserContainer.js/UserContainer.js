import React, { Component } from 'react'
import UserOutput from '../UserOutput/UserOutput'
import UserInput from '../UserInput/UserInput';

class UserContainer extends Component {
    state = {
        name: 'Karen'
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

   render() {
       return (
           <div>
               <UserInput changed={this.nameChangeHandler} currentName={this.state.name}/>
               <UserOutput name={this.state.name} />
               <UserOutput name={this.state.name} />
               <UserOutput name='Muffin' />
           </div>
       )
   }
}

export default UserContainer