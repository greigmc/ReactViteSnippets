import { useState, useEffect } from "react";
import { Container, Table, Alert } from "react-bootstrap";
import axios from "axios";

export default function ApiAxiosUrl() {
  const [axiosPosts, setAxiosPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiAxiosUrl = import.meta.env.VITE_API_AXIOS_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiAxiosUrl);
        setAxiosPosts(response.data.data || []); // Ensure response.data.data is an array
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiAxiosUrl]);

  if (loading) {
    return <Alert variant="info">Loading...</Alert>;
  }
  if (error) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

  return (
    <Container className="my-5">
      <h3 className="my-4">Axios</h3>
      <p>
        Axios is a popular JavaScript library for making HTTP requests, and it
        works great with React. Axios makes it easy to send asynchronous HTTP
        requests and handle responses. Here is an example of how you can use
        Axios to make a GET request in a React component using the useEffect
        hook:
      </p>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className="table table-bordered mt-4 text-start"
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Page</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Colour</th>
            <th scope="col">Pantone Value</th>
          </tr>
        </thead>
        {axiosPosts.length > 0 ? (
          axiosPosts.map((post) => (
            <tbody key={post.id}>
              <tr>
                <th scope="row">{post.id}</th>
                <td>{post.page}</td>
                <td>{post.name}</td>
                <td>{post.year}</td>
                <td>{post.color}</td>
                <td>{post.pantone_value}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          </tbody>
        )}
      </Table>
      <hr />
    </Container>
  );
}
