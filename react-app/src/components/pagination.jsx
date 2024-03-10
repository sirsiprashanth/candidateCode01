import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

class Pagination extends Component{



    state = {
        table :[],
        apiStatus:'Fetching Data...',
        columns:[
            {
                name:'Name',
                selector:row => row.name
            }
        ]
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
                 <DataTable
                    columns={this.state.columns}
                    data={this.state.table}
                    pagination
                 >

                 </DataTable>
             </>);
         }
}

export default Pagination