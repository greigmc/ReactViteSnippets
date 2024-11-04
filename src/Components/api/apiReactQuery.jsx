import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Table, Alert, Spinner } from "react-bootstrap";

const apiReactQuery = import.meta.env.VITE_API_REACT_QUERY_URL;

const fetchUsers = async () => {
  const { data } = await axios.get(apiReactQuery);
  return data;
};

export default function ApiReactQuery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Spinner animation="border" variant="info" />; // Add a spinner for better UX
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <Container>
      <h3>React Query API</h3>
      <p>
        React Query is a powerful library for managing server-state in React
        applications. It simplifies data fetching and synchronization, offering
        features like caching, background updates, and optimistic updates. With
        React Query, your application always has fresh data and reduced
        redundant requests.
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
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.name}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geo.lat}</td>
              <td>{user.address.geo.lng}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
