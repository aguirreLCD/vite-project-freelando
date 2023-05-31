import { Card } from "./components/Card/Card.jsx";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles.jsx";
import { Header } from "./components/Header/Header.jsx";
import { ThemeProviderContext } from "./components/ThemeProviderContext/ThemeProviderContext.jsx";
import { Typography } from "./components/Typography/Typografy.jsx";

function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles />
      <Header />
      <Card>
        <Typography variantToBindStyle="h1" htmlElement="h1">
          Freelando
        </Typography>

        <Typography variantToBindStyle="body" htmlElement="body">
          Create your profile for free to start working with the best
          freelancers. Then you can give more details about your demands and
          your way of working.
        </Typography>
      </Card>
    </ThemeProviderContext>
  );
}

export default App;
