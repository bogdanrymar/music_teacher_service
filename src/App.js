import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  ) ;
}

export default App;
