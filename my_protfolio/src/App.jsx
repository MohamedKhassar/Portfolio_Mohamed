import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Body from "./components/body/Body";
// import Main from "./components/main/Main";

const App = () => {
  return (
    <BrowserRouter>
  
    <Nav />
    <Body />
    {/* <Main /> */}
    </BrowserRouter>
  );
}

export default App;
