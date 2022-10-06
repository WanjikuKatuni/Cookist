import React, {useState} from 'react'
// styling
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';



function Search() {

    // setState
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event){
        event.preventDefault();

    }
  return (
    // Insert form
    <Form onSubmit={handleSubmit}>
        <div>
            <FaSearch></FaSearch>
            <input 
            type="text"
            value={searchTerm}/>
            
        </div>
    </Form>
  )
}


const Form = styled.form `
     margin: 0 2rem;
     
     div {
        width: min(550px, 100%);
        margin: 0 auto;
        postion:relative;
     }
     input{
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 0.8rem;
        border: none;
        outline: none;
        width: 100%;

        svg {
            postion:absolute;
            top:50%;
            left:0%;
            transform: translate(100%,-50%);
            color:white;
        }

     }
`;

export default Search