import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Caption } from "../../styles/TextStyles"

function NavBar() {
  return (
    <Bar>
      <Logo>
        <Link to="/">
          <StaticImage
            src="../../images/XFTLogo.png"
            width={150}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Logo"
          />
        </Link>
      </Logo>
      <Menu>
        <Caption>
          <Link to="/">HOME</Link>
        </Caption>
        <Caption>
          <Link to="/">ABOUT</Link>
        </Caption>
        <Caption>
          <Link to="/">PRODUCTS</Link>
        </Caption>
        <Caption>
          <Link to="/">LOCATIONS</Link>
        </Caption>
      </Menu>
    </Bar>
  )
}

export default NavBar

const Bar = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
  background-color: gray;
`
const Logo = styled.div``

const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`
