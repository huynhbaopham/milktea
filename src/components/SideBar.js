import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <StaticImage
          src="../images/Logos/circle-xmark-regular.svg"
          alt="close"
          height="{2rem}"
        />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="home" onClick={toggle}>
          HOME
        </SideBarLink>
        <SideBarLink to="about" onClick={toggle}>
          ABOUT
        </SideBarLink>
        <SideBarLink to="locations" onClick={toggle}>
          LOCATIONS
        </SideBarLink>
        <SideBarLink to="/menu" onClick={toggle}>
          MENU
        </SideBarLink>
      </SideBarMenu>
      <SideBtn>
        <SideBtnLink to="/order">ONLINE ORDER</SideBtnLink>
      </SideBtn>
    </SideBarContainer>
  )
}

export default SideBar

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: whitesmoke;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  color: #fff;
`

const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: darkgrey;
  &:hover {
    color: darkkhaki;
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: #252626;
  }
`

const SideBtn = styled.div`
  display: flex;
  justify-content: center;
`

const SideBtnLink = styled(Link)`
  border-radius: 50px;
  background: pink;
  white-space: nowrap;
  padding: 16px 64px;
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
