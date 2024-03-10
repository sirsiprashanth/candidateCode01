import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return (<>
            <Link to={'custom-filter'}>Implement a Custom Filter Component</Link>
            <br />
            <br />
            <Link to={'rest-endpoint'}>Create a Simple REST Endpoint:</Link>
            <br />
            <br />
            <Link to={'pagination'}>Develop a Pagination Component:</Link>
            <br />
            <br />
            <Link to={'middleware'}>Create a Simple Authentication Middleware:</Link>
        </>);
    }
}

export default Home