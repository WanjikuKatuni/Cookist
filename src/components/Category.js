// component that displays list of various categories of recipes
import React from 'react'
// import icons from react icons and favicons
import {GiForkKnifeSpoon, GiNoodles} from "react-icons/gi";
import {TbSoup} from "react-icons/tb";
import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
// styling
import styled from 'styled-components';
// react router
import {NavLink} from "react-router-dom";



function Category() {
  return (
    <NavList>
        {/* navlink used to create react links */}
        <NavLink >
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink >
        <NavLink >
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink >
            <GiNoodles/>
            <h4>Chinese</h4>
        </NavLink>
        <NavLink>
            <TbSoup/>
            <h4>African</h4>
        </NavLink>
        <NavLink >
            <GiForkKnifeSpoon/>
            <h4>Random</h4>
        </NavLink>
    </NavList>
  )
}

const NavList = styled.div `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category