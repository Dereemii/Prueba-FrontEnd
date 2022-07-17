import Container from '@mui/material/Container';
import { ClippedDrawer } from "./Components/ClippedDrawer/ClippedDrawer";

function App() {
  return (
    <>
      <Container maxWidth={false} disableGutters={true} >
        <ClippedDrawer/>
      </Container>

    </>

  )
}


export default App;
