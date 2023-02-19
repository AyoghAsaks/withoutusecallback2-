import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  let [price, setPrice] = useState(0);

  //Place "fetchPrice" function inside "useEffect" Hook
  useEffect(() => {
    let fetchPrice = () => {
      setPrice(Math.floor(Math.random() * 100) + 1);
    };

    const interval = setInterval(() => {
      fetchPrice();
    }, 2000);
    return () => clearInterval(interval);
  }, [price])

  return (
    <Container className="">
      <Row className="">
        <Col>
          <h1>{price}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
