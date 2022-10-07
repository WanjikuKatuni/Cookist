// import './App.css';

import Pages from "./components/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    // console.log("mynameisAnn")
    <div className="App">
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>Cookist Recipes </Logo>
      </Nav>
      <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  // font-family: "Lobster Two", cursive;
`;

export default App;
