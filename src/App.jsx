import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Body />
    </BrowserRouter>
  );
}

export default App;
