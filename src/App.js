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
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [results, setResults] = useState();
  const [repo, setRepo] = useState();
  const [keyword, setKeyword] = useState();
  const [count, setCount] = useState();
  const apiUrl = 'https://api.github.com/search/commits?q=';

  const handleErrors = () => {
    if (user === undefined || repo === undefined || keyword === undefined) {
      return true;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleErrors();

    axios
      .get(`${apiUrl}repo:${user}/${repo}+${keyword}`, {
        headers: { Accept: 'application/vnd.github.cloak-preview' }
      })
      .then(response => {
        console.log(response.data.items);
        setCount(response.data.total_count);
        setResults(response.data.items);
      })
      .catch(err => {
        setError('Please enter all valid values');
      });
  };

  return (
    <div>
      <div className='wrapper-form'>
        <h4>Search by keyword or ticket ID to view all commits</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
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

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              User
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type='text'
                placeholder='User'
                onChange={e => setUser(e.target.value)}
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
                onChange={e => setKeyword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit'>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
        <p className='error'>{error ? error : ''}</p>
      </div>

      {results ? (
        <div className='wrapper-grid'>
          <p className='commits'>Total Commits: {count}</p>
          <Table striped bordered hover variant='light'>
            <thead>
              <tr>
                <th>Commit SHA</th>
                <th>Author Name</th>
                <th>Date</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr>
                  <td key={index}>
                    <a href={item.html_url} target='blank'>
                      {item.commit.message}
                    </a>
                  </td>
                  <td key={index}>
                    {/* <a href={item.author.html_url} target='blank'> */}
                    {item.commit.author.name}
                    {/* </a> */}
                  </td>

                  <td key={index}>{item.commit.author.date}</td>
                  <td key={index}>
                    <a href={item.repository.html_url} target='blank'>
                      {item.repository.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
