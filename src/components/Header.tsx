import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Header = () => {
  return(
 <MainHeader>
  <NavLink to={'/'}>
<img src="./public/veeru.png" width={200} height={80} />
  </NavLink>
  <Navbar/>
 </MainHeader>

  );
};
const MainHeader = styled.header`
padding: 0 3.8rem;
height: 4rem;
display:flex;
justify-content: space-between;
align-items: center;
backround-color:${({theme}) => theme.colors.bg};
background-color: rgb(249 249 255);
}
`;
export default Header;
