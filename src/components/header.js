import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6EAD9`,
      marginBottom: `1.45rem`,
    }}
  >
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <StaticImage>
        src="../images/XFTLogo.png" width={150}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Logo" style={{ marginBottom: `1.45rem` }}
      </StaticImage>
    </Link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    ></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
