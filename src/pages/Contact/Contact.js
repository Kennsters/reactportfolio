import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'

const Contact = () => {
    return (
        <>
            <Container>
                <Form className="row">
                    <section className="col-md-2"></section>
                    <section id="content" className="text-center col-md-8">
                        <h1>Contact</h1>
                        <hr />
                            <p><span style={{ fontWeight: "bold" }}>Email Address:</span> kennyyangh@gmail.com</p>
                            <p><span style={{ fontWeight: "bold" }}>Phone Number:</span> (714)-833-4686</p>
                            <FormGroup className="form-group">
                                <Label htmlFor="exampleFormControlInput1">Name</Label>
                                <Input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Full Name Here" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label htmlFor="exampleFormControlInput1">Email address</Label>
                                <Input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label htmlFor="exampleFormControlTextarea1">Message</Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Want to talk? Send me a message!"></textarea>
                            </FormGroup>
                                <Button id="Submit" className="btn btn-secondary" type="submit">Submit</Button>
                    </section>
                </Form>
            </Container>
       </>
    )
}

export default Contact