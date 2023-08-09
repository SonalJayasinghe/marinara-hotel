import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Welcome to Castle Hotel";
  }, []);

  return (
    <>
      <Grid>
        <GridItem>
          <NavBar></NavBar>
        </GridItem>
        <GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
