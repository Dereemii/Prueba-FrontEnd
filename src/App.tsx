import Container from '@mui/material/Container';
import { ClippedDrawerContainer } from "./Components/ClippedDrawerContainer/ClippedDrawerContainer";

function App() {
  return (
    <>
      <Container maxWidth={false} disableGutters={true} >
        <ClippedDrawerContainer />
      </Container>
    </>
  )
}


export default App;
