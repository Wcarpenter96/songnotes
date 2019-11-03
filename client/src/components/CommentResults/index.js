import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default (props) => {
    if (props.comments.length > 0) {
        let { comments } = props;
        return (
            comments.map((comment, index) => {
                return (<ListGroup.Item key={index}>{comment.text}</ListGroup.Item>)
            })
        )
    } else return (<ListGroup.Item>No Notes</ListGroup.Item>)
}