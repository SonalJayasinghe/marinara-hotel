import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from "../components/NavBar/navbar";
import NotFound404 from '../components/NotFound404'

function PageNotFound() {
  return (
    <Grid>
    <GridItem>
      <NavBar></NavBar>
    </GridItem>
    <GridItem>
      <NotFound404/>
    </GridItem>
  </Grid>
  )
}

export default PageNotFound