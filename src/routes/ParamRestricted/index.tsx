import React, { ReactElement, lazy } from "react"
import { Navigate } from "react-router-dom"
import { URL } from "@config/Constants"
import useQuery from "@hooks/useParamQuery"

const PageLayout = lazy(() => import("@layout/Layout"))

const ParamRestrictedRoute: React.FC<{ param: string; element: ReactElement }> = ({ param, element }) => {
  const query = useQuery()
  const getParam = query.get(param)

  return getParam ? <PageLayout>{element}</PageLayout> : <Navigate to={URL.FORGOT_PASSWORD} replace />
}

export default ParamRestrictedRoute
