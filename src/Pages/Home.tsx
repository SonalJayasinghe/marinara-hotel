import { Box, Flex, Grid, GridItem, calc } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

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
            <Hero/>
        </GridItem>
        <GridItem>
          <Box position={"absolute"} top={"100vh"} padding={0} width="100%">
            <Footer/>
            </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
