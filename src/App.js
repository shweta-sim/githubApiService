import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';

const App = () => {
  const [repo, setRepo] = useState();
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState();
  const [count, setCount] = useState();
  const apiUrl = 'https://api.github.com/search/commits?q=';

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`${apiUrl}${keyword}`, {
        headers: { Accept: 'application/vnd.github.cloak-preview' }
      })
      .then(response => {
        console.log(response.data.total_count);
        setCount(response.data.total_count);
      });

    // axios
    //   .get(`${apiUrl}${keyword}`, {
    //     headers: { Accept: 'application/vnd.github.cloak-preview' }
    //   })
    //   // .get('https://api.github.com/search/commits?q=changes+done', {
    //   //   headers: { Accept: 'application/vnd.github.cloak-preview' }
    //   // })
    //   .then((response) => {
    //     console.log(response.data);
  };
  return (
    <div>
      <div className='wrapper-form'>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Repository
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type='text'
                placeholder='Repository'
                onChange={e => setRepo(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Keyword
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type='text'
                placeholder='Keyword'
                onChange={e => setKeyword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as='legend' column sm={2}>
                Sort By
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type='radio'
                  label='first radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios1'
                />
                <Form.Check
                  type='radio'
                  label='second radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios2'
                />
                <Form.Check
                  type='radio'
                  label='third radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios3'
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit'>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>

      <div className='wrapper-grid'>
        <p>Total Commits: {count}</p>
        <Table striped bordered hover variant='light'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default App;
