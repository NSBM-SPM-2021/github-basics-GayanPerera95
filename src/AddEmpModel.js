import React,{Component} from 'react';
import {Model,Button,Row,Col,Form} from 'react-bootstrap';


export class AddEmpModel extends Component{
    constructor(pros){
        super(pros);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'employee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeId:null,
                EmployeeName: event.target.EmployeeName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
        return(
            <div className="container">


                <Model 
                {...this.props}
                size="lg"
                aria-labelledby="contained-model-title-vcenter"
                centered>

                    <Model.Header clooseButton>
                        <Model.Title id = "contained-model-title-vcenter">
                            Add Employee
                        </Model.Title>
                    </Model.Header>
                    <Model.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit ={this.handleSubmit}>
                                    <Form.Group controllId="EmployeeId">
                                        <Form.Label>EmployeeId</Form.Label>
                                        <Form.Control type="text" name="EmployeeId" required 
                                        placeholder="EmployeeId"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Employee
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Model.Body>
                    <Model.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Model.Footer>
                </Model>
            </div>
        )
    }
}