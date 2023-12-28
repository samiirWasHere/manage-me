import React, { lazy } from "react"
import { useLocation } from "react-router-dom"
import { URL } from "@config/Constants"

const NavBar = lazy(() => import("@components/NavBar"))
const Footer = lazy(() => import("@components/Footer"))

const PageLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <>
      {![URL.SIGN_IN, URL.SIGN_UP, URL.FORGOT_PASSWORD, URL.RESET_PASSWORD].includes(pathname) && <NavBar />}
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
