import { Container } from "./components/Container";
import Header from "./components/Header";

const App = () => {

  return (
    <>
    <Header />
    <Container.Root>
      <Container.Left />
      <Container.Right />
    </Container.Root>
    </>
  );
};

export default App;
