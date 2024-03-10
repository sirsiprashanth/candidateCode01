import React, { Component } from 'react';

class Middleware extends Component{

    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    state = {
        token:'',
        errorMsg : ''
    }

    componentDidMount(){

    }

   async generateAction(thiss){
        const response = await fetch(process.env.REACT_APP_API_URL+'generate');
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const responseData = await response.json();
          console.log(responseData.token)
        thiss.setState({
            token :responseData.token
        })
    }

    async checkAction(thiss){
        const token = this.inputRef.current.value;
        console.log({token})
        const response = await fetch(process.env.REACT_APP_API_URL+'check',{
            method:'GET',
            headers: {
            'Authorization': 'Bearer '.token,
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Access-Control-Allow-Credentials':true
          }});
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const responseData = await response.json();
          console.log(responseData.token)
        thiss.setState({
            token :responseData.token
        })
    }

    render(){
       return (<>
            <button onClick={()=>this.generateAction(this)}>Generate Token</button>
            <br />
            <br />
            <textarea name="" id="token" cols="30" rows="10" value={this.state.token} ref={this.inputRef}></textarea>
            <br />
            <br />
            <button onClick={()=>this.checkAction(this)}>Check Token</button>
        </>);
    }
}

export default Middleware