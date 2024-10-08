import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

export default function ApiFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setPosts(jsonData.data || []); // Ensure jsonData.data is an array
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className='my-5'>
      <h3>Fetch API</h3>
      <p>Fetch API is a modern, promise-based API for making HTTP requests in JavaScript. It provides a simple and flexible interface for making GET, POST, PUT, and DELETE requests and handling the response from the server.</p>
      <p>Here is an example of how you can use fetch to make a GET request to retrieve data from a server in a React component using the useEffect hook:</p>
      <Table responsive striped bordered hover variant="dark" className="table table-bordered mt-4 text-start">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        {posts.length > 0 ? (
          posts.map(post => (
            <tbody key={post.id}>
              <tr>
                <th scope="row">{post.id}</th>
                <td>{post.first_name}</td>
                <td>{post.last_name}</td>
                <td>{post.email}</td>
                <td><img src={post.avatar} alt={`${post.first_name} ${post.last_name}`} /></td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          </tbody>
        )}
      </Table>
      <hr />
    </Container>
  );
}
