import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";

function Home() {
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
          <Heading> Welcome to Fucking Home</Heading>
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
