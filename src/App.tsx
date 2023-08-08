import NavBar from "./components/navbar"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = 'Welcome to Castle Hotel';
  }, []);
  
  return (
    <>
   <NavBar></NavBar>
    </>
  )
}

export default App