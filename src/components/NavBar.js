import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>
            <StaticImage
              to="/"
              src="../images/Logos/LOGOWhite.png"
              alt="XING FU TANG"
              height={70}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="#">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="locations">locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/menu">menu</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="order">order</NavLink>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/order">online order</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: #252626;
  height: 80px;
  //margin-top = -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1px;
  width: 100%;
  padding: 0 20px;
  max-width: 1100px;
`

const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-110%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f6ead9;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  gap: 20px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
`

const NavLink = styled(Link)`
  color: #f6ead9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #eeebe2;
  }
`

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: pink;
  white-space: nowrap;
  padding: 10px 22px;
  color: #252626;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: darkkhaki;
    color: #252626;
  }
`
