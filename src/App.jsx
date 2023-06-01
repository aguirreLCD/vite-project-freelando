import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles.jsx";
import { Header } from "./components/Header/Header.jsx";
import { InputText } from "./components/InputText/InputText.jsx";
import { ThemeProviderContext } from "./components/ThemeProviderContext/ThemeProviderContext.jsx";
import { Typography } from "./components/Typography/Typografy.jsx";
import { Button } from "./components/Button/Button.jsx";

function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles />
      <Header />
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variantToBindStyle="h1" htmlElement="h1">
                Freelando
              </Typography>

              <Typography variantToBindStyle="body" htmlElement="body">
                Create your profile for free to start working with the best
                freelancers. Then you can give more details about your demands
                and your way of working.
              </Typography>

              <Row>
                <Col lg={12} md={12} sm={12}>
                  <InputText label="Full Name:" />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <InputText label="State:" />
                </Col>

                <Col lg={8} md={8} sm={8}>
                  <InputText label="City:" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <InputText label="Email:" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <InputText label="Password:" />
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <InputText label="Confirm password:" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "left" }}>
                    <Button btnType="secondary">Next</Button>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Button btnType="primary">Back</Button>
                  </div>
                </Col>
              </Row>
              
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeProviderContext>
  );
}

export default App;
