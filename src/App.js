// import './App.css';

import Pages from "./components/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
      <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
