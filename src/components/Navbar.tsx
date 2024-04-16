import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar  = ()=>  {
    const Nav = styled.nav`
    ul{display: flex; gap: 1.5rem;
    a {text-decoration: none;
        color:#000;
    }
    li {list-style: none;
        display: inline-block;
          text-decoration: none;
          font-size:1.5rem ;
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.black};
          transition:color 0.3s linear ; 
    }
    }   
  a { &:hover, &:active{ color:${({ theme }) => theme.colors.helper};}
}
  }
`;
    return (
        <Nav>
            <div className="manuIcon">
                <ul className="navbar-list">
                    <li>
                        <NavLink to={"/"} className='navlink' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"} >Services</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    );
};

export default Navbar;
