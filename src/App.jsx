import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: #fff;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Welcome to The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in & out</Heading>
              <Button>Check In</Button>
              <Button variation="secondary">Check Out</Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Forms</Heading>
            <form>
              <Input type="text" placeholder="Number of guests" />
              <Input type="text" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
