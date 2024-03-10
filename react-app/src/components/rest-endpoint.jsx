import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

class RestEndpoint extends Component{

    state = {
        table :[],
        apiStatus:'Fetching Data...',
       
    }
    componentDidMount(){
        setTimeout(()=>{
            this.fetchData();
        },1000)
    }

   async  fetchData(){
        const response = await fetch(process.env.REACT_APP_API_URL+'list');
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const responseData = await response.json();
        this.setState({
            apiStatus:'Data fetched from Rest API',
            table :responseData,
        })
    }

        render(){
            return (<>
            <h1>{this.state.apiStatus}</h1>
            <table border="1" style={{bordercollapse:'collapse'}}>
                <tr>
                <th>Name</th>
                </tr>
                {this.state.table.map(( listValue, index ) => {
                    return (
                        <tr key={index}>
                        <td>{listValue.name}</td>
                        </tr>
                    );
                    })
                }
            </table>
             </>);
         }
}

export default RestEndpoint