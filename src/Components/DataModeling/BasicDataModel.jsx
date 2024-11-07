import { Container, Table } from "react-bootstrap";
import { initialUsers } from './ContextApiModel/constants'; // Ensure this path is correct

export default function BasicDataModeling() {
  return (
    <Container className="my-5">
      <h3 className="my-4">Basic Data Model</h3>
      <p>
        Imagine you have a list of users, and you want to display their
        information. Here’s how you can create a basic data model:
      </p>{" "}
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {initialUsers.length > 0 ? (
          initialUsers.map((user) => (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
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
    </Container>
  );
}
