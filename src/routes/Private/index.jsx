import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import { useProps } from "@contexts/PropsContext"
import { URL } from "@config/Constants"

const PageLayout = lazy(() => import("@layout/Layout"))

const PrivateRoute= ({ Component }) => {
  const { authenticated } = useProps()

  return authenticated ? <PageLayout>{Component}</PageLayout> : <Navigate to={URL.SIGN_IN} replace />
}

export default PrivateRoute
