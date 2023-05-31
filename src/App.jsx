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
          <Col lg={6}>
            <Card>
              <Typography variantToBindStyle="h1" htmlElement="h1">
                Freelando
              </Typography>

              <Typography variantToBindStyle="body" htmlElement="body">
                Create your profile for free to start working with the best
                freelancers. Then you can give more details about your demands
                and your way of working.
              </Typography>

              <InputText label="Full Name:" />
            </Card>
          </Col>
          <Button btnType="secondary">Freelancer</Button>
          <Button btnType="primary" btnState="default">
            Already a client
          </Button>
        </Row>
      </Container>

      <Footer />
    </ThemeProviderContext>
  );
}

export default App;
