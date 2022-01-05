import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {
        return(
           this.state.isLoggedIn ?
            <div>Welcome Rahul</div> :
            <div>Welcome Guest</div>
        )
    //     if(this.state.isLoggedIn){
    //         return(
    //         <div>Welcome Rahul</div>
    //         )}
    //     else{
    //         return(
    //         <div>Welcone Guest</div>
    //         )}
        }
}

export default UserGreetings