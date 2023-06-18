import {Route, BrowserRouter ,Routes} from "react-router-dom"

import { Header } from "./header";
import "./Style/header.scss"
import "./Style/app.scss"
import "./Style/home.scss"
import { Home } from "./components/home";
function App() {
  return (
  <>
   <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
