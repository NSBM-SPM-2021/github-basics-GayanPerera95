import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';


export class AddEmpModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
         fetch('http://localhost:5000/api/employee',{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeId: event.target.EmployeeId.value,
                EmployeeName: event.target.EmployeeName.value,
                Department: event.target.Department.value,
                DateOfJoining: event.target.DateOfJoining.value,
                PhotoFileName: event.target.PhotoFileName.value
            })
        })

        .then(res => res.json())
        .then((result)=>{
            //console.log('Success', result);
            alert(result);
        },
        (error) =>{
            //console.error('Error',error);
            alert('Failed');
        })
    }

    render(){
        return(
            <div className="container">


                <Modal 
                {...this.props}
                size="lg"
                aria-labelledby="contained-model-title-vcenter"
                centered>

                    <Modal.Header clooseButton>
                        <Modal.Title id = "contained-model-title-vcenter">
                            Add Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit ={this.handleSubmit}>
                                    <Form.Group controllId="EmployeeId">
                                        <Form.Label>Employee ID:</Form.Label>
                                        <Form.Control type="int" name="EmployeeId" required 
                                        placeholder="Enter id"/>
                                    </Form.Group>
                                    <Form.Group controllId="EmployeeName">
                                        <Form.Label>Employee Name:</Form.Label>
                                        <Form.Control type="text" name="EmployeeName" required 
                                        placeholder="Enter name"/>
                                    </Form.Group>
                                    <Form.Group controllId="EmployeeId">
                                        <Form.Label>Department:</Form.Label>
                                        <Form.Control type="text" name="Department" required 
                                        placeholder="Enter Department"/>
                                    </Form.Group>
                                    <Form.Group controllId="DateOfJoining">
                                        <Form.Label>Date Of Joining:</Form.Label>
                                        <Form.Control type="date" name="DateOfJoining" required 
                                        placeholder="Enter date"/>
                                    </Form.Group>
                                    <Form.Group controllId="PhotoFileName">
                                        <Form.Label>Photo URL:</Form.Label>
                                        <Form.Control type="text" name="PhotoFileName" required 
                                        placeholder="Url.png"/>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Employee
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AddEmpModal;