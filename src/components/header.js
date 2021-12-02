import { useState } from "react"
import * as React from "react"
import Navbar from "./NavBar"
import SideBar from "./SideBar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </header>
  )
}

export default Header
