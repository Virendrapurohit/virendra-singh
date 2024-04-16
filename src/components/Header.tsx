import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { theme } from "../App";

const Header = () => {
  return (
    <MainHeader theme={theme} >
      <NavLink to={'/'}>
        <img src="./public/veeru.png" width={200} height={80} />
      </NavLink>
      <Navbar />
    </MainHeader>

  );
};
const MainHeader = styled.header`
padding: 0 3.8rem;
height: 4rem;
display:flex;
justify-content: space-between;
align-items: center;
background-color:${({ theme }) => theme.colors.bg}
`;
export default Header;
