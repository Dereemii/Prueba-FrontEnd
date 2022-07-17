import { Dashboard } from "./Components/Dashboard/Dashboard";
import Container from '@mui/material/Container';
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Container maxWidth={false} disableGutters={true} >
        <Header />
        <Dashboard />
      </Container>

    </>

  )
}


export default App;
