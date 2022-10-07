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
  padding: 0rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Inspiration', cursive; 
  

  
  svg {
    font-size: 6rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 8rem;
  font-weight: 400;
  color: black;
`;

export default App;
