import React, { Component } from 'react';

class CustomFilter extends Component{

    state = {
        data : [
            {name:'Rahul',age:21},
            {name:'Aneesh',age:22},
            {name:'Satheesh',age:23},
            {name:'Ramesh',age:24},
            {name:'Suresh',age:25},
            {name:'Mukesh',age:26},
            {name:'Ganesh',age:27},
            {name:'Murugesh',age:28},
        ],
        tableData:[]
    }

    componentDidMount(){
        console.log(process.env.REACT_APP_API_URL)
        this.setState({tableData : this.state.data});
    }

    keyupAction(thiss,e){
        const search = e.target.value.toLowerCase();
        const ref = thiss.state.data.filter(val=>{
            return val.name.toLowerCase().search(search) > -1 || val.age.toString().search(search) > -1 ;
        });
        thiss.setState({
            tableData:ref
        });
    }

    render(){
       return (<>
            <input type='text' onKeyUp={(evt)=>this.keyupAction(this,evt)}  placeholder='Enter the search text here '/>
            <table border="1" style={{bordercollapse:'collapse'}}>
                <tr>
                <th>Name</th>
                <th>Age</th>
                </tr>
                {this.state.tableData.map(( listValue, index ) => {
                    return (
                        <tr key={index}>
                        <td>{listValue.name}</td>
                        <td>{listValue.age}</td>
                        </tr>
                    );
                    })
                }
            </table>
        </>);
    }
}

export default CustomFilter