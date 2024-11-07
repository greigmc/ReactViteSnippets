import { Container } from "react-bootstrap";
import BasicDataModeling from "./BasicDataModel";
import StateDataModel from "./StateDataModel";
import ContextApiModel from "./ContextApiModel/ContextApiModel";
import { UserProvider } from "./UserContext"; // Ensure this path is correct

export default function DataModelingExample() {
  return (
    <Container className="my-5">
      <BasicDataModeling />
      <StateDataModel />
      <UserProvider>
        <ContextApiModel />
      </UserProvider>
    </Container>
  );
}
