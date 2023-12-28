import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import { URL } from "@config/Constants"

const PageLayout = lazy(() => import("@layout/Layout"))

const PublicRoute = ({ Component }) => {
  // const { authenticated } = useProps()

  // return !authenticated ? <PageLayout>{Component}</PageLayout> : <Navigate to={URL.DASHBOARD} replace />
}

export default PublicRoute
