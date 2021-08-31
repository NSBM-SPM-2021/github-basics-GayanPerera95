import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import { Button,ButtonToolbar } from 'react-bootstrap';
import {AddEmpModal} from './AddEmpModel';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={emps:[],addModalShow:false, isLoaded: false,
        }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'employee')
        .then(response=>response.json())
        .then(data =>{
            this.setState({emps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {emps} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>Department</th>
                        <th>DateOfJoining</th>
                        <th>PhotoFileName</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.EmployeeId}>
                                 <td>{emp.EmployeeId}</td>
                                 <td>{emp.EmployeeName}</td>
                                 <td>{emp.Department}</td>
                                 <td>{emp.DateOfJoining}</td>
                                 <td>{emp.PhotoFileName}</td>
                                 <td>
                                     <ButtonToolbar>
                                         <Button className="mt-1" variant="info">
                                             Edit
                                         </Button>
                                            <td></td>
                                         <Button className="mt-1" variant="danger">
                                             Delete
                                         </Button>
                                     </ButtonToolbar>
                                 </td>

                            </tr>
                            )}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Employee
                    </Button>

                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}
                    />
                </ButtonToolbar>
            </div>
        )
    }
}