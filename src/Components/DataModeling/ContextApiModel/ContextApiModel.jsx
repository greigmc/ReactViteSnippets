// ContextApiModel.jsx
import { useUsers } from "../UserContext"; // Ensure this path is correct
import { Container, Table, Button } from "react-bootstrap";

export default function ContextApiModel() {
  // Ensure this is a default export
  const { users, setUsers } = useUsers();

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: "Dave",
      email: "dave@example.com",
    };
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Container className="my-5">
      <h3 className="my-4">Data Model with Context API</h3>
      <p>For larger applications, you might use Reacts Context API to manage and share data models across multiple components:</p>
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {users.length > 0 ? (
          users.map((user) => (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant="dark" onClick={() => removeUser(user.id)}>
                    Remove User
                  </Button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          </tbody>
        )}
      </Table>
      <Button variant="dark" onClick={addUser}>
        Add User
      </Button>
    </Container>
  );
}
