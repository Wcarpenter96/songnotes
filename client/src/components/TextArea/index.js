import React from 'react';
import { Form, Container, Row, Col, Button, FormGroup } from 'react-bootstrap';

export default (props) => {
    return (
        <Container className="mb-5">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Add your note to this song</Form.Label>
                        <Form.Control placeholder="Compose here" as="textarea" rows="5" onChange={props.handleInputChange}/>
                    </Form.Group>
                    <FormGroup>
                        <Button variant="primary" onClick={props.handleSubmit}>
                            Add Note
                        </Button>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}