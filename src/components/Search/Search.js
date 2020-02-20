import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Search = props => {
  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            User
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='text'
              placeholder='User'
              onChange={e => props.setUser(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Repository
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='text'
              placeholder='Repository'
              onChange={e => props.setRepo(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Keyword
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='text'
              placeholder='Keyword'
              onChange={e => props.setKeyword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type='submit'>Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
      <p className='error'>{props.error ? props.error : ''}</p>
    </div>
  );
};

export default Search;
