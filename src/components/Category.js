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
    <NavList >
        {/* navlink used to create react links */}
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink >
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </SLink>
        <SLink to={'/cuisine/African'}>
            <TbSoup/>
            <h4>African</h4>
        </SLink>
        {/* <SLink to={'/cuisine/Random'}>
            <GiForkKnifeSpoon/>
            <h4>Random</h4>
        </SLink> */}
    </NavList>
  )
}

const NavList = styled.div `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration:none;
    background: linear-gradient(35deg,#494949,#313131);
    width: 6rem;
    height:6rem;
    cursor:pointer;
    transform: scale(0.8);


    h4 {
        color:white;
        font-size:0.8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color:white
        }
        h4{
            color:white
        }
    }

`;

export default Category