import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

export default function Api() {
  const [posts, setPosts] = useState([]);
  const [axiosPosts, setaxiosPosts] = useState([]);


  const apiUrl = import.meta.env.VITE_API_URL;
  const apiAxiosUrl = import.meta.env.VITE_API_AXIOS_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setPosts(jsonData.data); // Adjust this line based on the actual structure
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiAxiosUrl);
        setaxiosPosts(response.data.data); // Adjust this line based on the actual structure
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className='my-5'>
      <h3>Fetch API</h3>
      <p>Fetch API is a modern, promise-based API for making HTTP requests in JavaScript. It provides a simple and flexible interface for making GET, POST, PUT and DELETE requests and handling the response from the server.</p>
      <p>Here is an example of how you can use fetch to make a GET request to retrieve data from a server in a React component using the useEffect hook</p>
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
        {posts.map(post => (
          <tbody key={post.id}>
            <tr>
              <th scope="row">{post.id}</th>
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.email}</td>
              <td>{post.avatar}</td>
            </tr>
          </tbody>
        ))}
      </Table>
      {/* <table className="table table-bordered mt-4 text-start responsive">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        {posts.map(post => (
          <tbody key={post.id}>
            <tr>
              <th scope="row">{post.id}</th>
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.email}</td>
              <td>{post.avatar}</td>
            </tr>
          </tbody>
        ))}
      </table> */}

      <hr />

      <h3 className='my-4'>Axios</h3>
      <p>Axios is a popular JavaScript library for making HTTP requests, and it works great with React. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations (create, read, update and delete), as well as handle the responses.</p>
      <p>Here is an example of how you can use Axios to make a GET request to retrieve data from a server in a React component using the useEffect hook</p>
      <hr />
      <Table responsive striped bordered hover variant="dark" className="table table-bordered mt-4 text-start">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Color</th>
            <th scope="col">Pantone Value</th>
          </tr>
        </thead>
        {axiosPosts.map(post => (
          <tbody key={post.id}>
            <tr>
              <th scope="row">{post.id}</th>
              <td>{post.name}</td>
              <td>{post.year}</td>
              <td>{post.color}</td>
              <td>{post.pantone_value}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
}
