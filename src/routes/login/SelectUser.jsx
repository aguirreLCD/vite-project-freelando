import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography/Typografy";

import client from "./assets/client.png";
import freela from "./assets/freela.png";

const SelectUser = () => {
  return (
    <>
      <Typography variantToBindStyle="h1" htmlElement="h1">
        Create account here
      </Typography>

      <Typography variantToBindStyle="h3" htmlElement="h2">
        Need help?
      </Typography>

      <Row>
        <Col lg={5} md={5} sm={5}>
          <img src={client} alt="" />
        </Col>
        <Col lg={7} md={7} sm={7}>
          <img src={freela} alt="" />
        </Col>
      </Row>
    </>
  );
};

export default SelectUser;
