import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/navbar";
import { useEffect } from "react";
import NotFound404 from "./components/NotFound404";

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
          <NotFound404/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
