import React, { ReactElement, lazy } from "react"
import { Navigate } from "react-router-dom"
import { URL } from "@config/Constants"


const ParamRestrictedRoute = ({ param, element }) => {
  // const getParam = query.get(param)

  // return getParam ? <PageLayout>{element}</PageLayout> : <Navigate to={URL.FORGOT_PASSWORD} replace />
}

export default ParamRestrictedRoute
