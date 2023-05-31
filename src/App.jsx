import { Card } from "./components/Card/Card.jsx";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles.jsx";
import { ThemeProviderContext } from "./components/ThemeProviderContext/ThemeProviderContext.jsx";

function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ThemeProviderContext>
  );
}

export default App;
