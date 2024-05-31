import { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
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
            setPosts(jsonData);
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
            setaxiosPosts(response.data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchData();
      }, []);

    // useEffect(() => {
    //     axios.get(apiAxiosUrl)
    //       .then(response => {
    //         setaxiosPosts(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }, {});
    
  
    return (
<Container className='my-4'> 
<h3>Fetch API</h3>
<p>Fetch API is a modern, promise-based API for making HTTP requests in JavaScript. It provides a simple and flexible interface for making GET, POST, PUT and DELETE requests and handling the response from the server.</p>
<p>Here is an example of how you can use fetch to make a GET request to retrieve data from a server in a React component using the useEffect hook</p>
<table className="table table-bordered mt-4 text-start">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
    {posts.map(post => (
        <tbody key={post.list}>
            <tr>
            <th scope="row" key={post.id}>{post.id}</th>
            <td key={post.username}>{post.username}</td>
            <td key={post.phone}>{post.phone}</td>
            <td key={post.email}>{post.email}</td>
            <td key={post.website}>{post.website}</td>
            </tr>
        </tbody>
        ))}
      </table>
     
<hr></hr>
     <h3 className='my-4'>Axios</h3>
     <p>Axios is a popular JavaScript library for making HTTP requests, and it works great with React. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations (create, read, update and delete), as well as handle the responses.</p>
     <p>Here is an example of how you can use Axios to make a GET request to retrieve data from a server in a React component using the useEffect hook</p>
     <hr></hr>
      <table className="table table-bordered mt-4 text-start">
      <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Company</th>
        </tr>
      </thead>
          {axiosPosts.map(post => (
        <tbody key={post.Axioslist}>
        <tr>
        <th scope="row" key={post.AxiosId}>{post.id}</th>
        <td key={post.AxiosName}>{post.name}</td>
        <td key={post.AxiosPhone}>{post.phone}</td>
        <td key={post.AxiosEmail}>{post.email}</td>
        <td key={post.AxiosCompany}>{post.company.name}</td>

        </tr>
    </tbody>          ))}
    </table>
    </Container>

    );

  }

