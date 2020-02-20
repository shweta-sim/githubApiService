import React from 'react';
import Table from 'react-bootstrap/Table';

const Results = props => {
  const handleDate = raw => {
    return new Date(raw).toUTCString();
  };
  return (
    <div>
      <p className='commits'>Total Commits: {props.count}</p>
      <Table striped bordered hover variant='light'>
        <thead>
          <tr>
            <th>Commit Message</th>
            <th>Contributor ID</th>
            <th>Contributor Name</th>
            <th>Date</th>
            <th>Repository</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => (
            <tr key={item.sha}>
              <td>
                <a href={item.html_url} target='blank'>
                  {item.commit.message}
                </a>
              </td>
              <td>
                <a href={item.author.html_url} target='blank'>
                  {item.author.login}
                </a>
              </td>

              <td>{item.commit.author.name}</td>

              <td>{handleDate(item.commit.author.date)}</td>
              <td>
                <a href={item.repository.html_url} target='blank'>
                  {item.repository.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Results;
