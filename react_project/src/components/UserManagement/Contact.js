import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios'

class Contact extends Component {
    constructor(){
        super();

        this.state={
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();

        const { name , email , message } = this.state;

        const form =await axios.post('http://localhost:3000/api/form' , {
            name,
            email,
            message
        })

    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} style = {{ width: '600px'}}>
                <FormGroup>
                    <label for="name">Name:</label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="email">Email:</label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="message">Message:</label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Contact;