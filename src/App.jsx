import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles.jsx";
import { Header } from "./components/Header/Header.jsx";
import { InputText } from "./components/InputText/InputText.jsx";
import { ThemeProviderContext } from "./components/ThemeProviderContext/ThemeProviderContext.jsx";
import { Typography } from "./components/Typography/Typografy.jsx";
import { Button } from "./components/Button/Button.jsx";
import { FreelandoLogo } from "./components/Icons/FreelandoLogo.jsx";
import { InstagramIcon } from "./components/Icons/InstagramIcon.jsx";
import { TwitchIcon } from "./components/Icons/TwitchIcon.jsx";
import { TwitterIcon } from "./components/Icons/TwitterIcon.jsx";
import { WhatsAppIcon } from "./components/Icons/WhatsAppIcon.jsx";
import { DropDownList } from "./components/DropDownList/DropDownList.jsx";

const brazilianStates = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const App = () => {
  return (
    <ThemeProviderContext>
      <GlobalStyles />

      <Header>
        <Container>
          <Row>
            <Col align="center">
              <FreelandoLogo />
            </Col>

            <Col align="center">
              <p>Login</p>
            </Col>
          </Row>
        </Container>
      </Header>

      <Container style={{ margin: "80px 0" }}>
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
                <Col lg={5} md={5} sm={5}>
                  <DropDownList title="State" options={brazilianStates} />
                </Col>

                <Col lg={7} md={7} sm={7}>
                  <InputText label="City:" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <InputText label="Email:" />
                </Col>
              </Row>

              <Row>
                <Col lg={5} md={5} sm={5}>
                  <InputText label="Password:" />
                </Col>

                <Col lg={7} md={7} sm={7}>
                  <InputText label="Confirm password:" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <div style={{ textAlign: "left" }}>
                    <Button btnType="secondary">Next</Button>
                  </div>
                </Col>

                <Col>
                  <div style={{ textAlign: "end" }}>
                    <Button btnType="primary">Back</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer>
        <Container>
          <Row>
            <Col align="center">
              <FreelandoLogo />
              <p style={{ fontSize: "0.75rem" }}>
                Designed by Alura. Develop by Lili.
              </p>
            </Col>

            <Col align="center">
              <div>
                <p>Follow us:</p>
                <WhatsAppIcon />
                <TwitchIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </ThemeProviderContext>
  );
};

export default App;
