import React, { Fragment, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { URL } from '@config/Constants';
import ScrollToTop from '@utils/ScrollToTop';

import PublicRoute from './Public/index';
import PrivateRoute from './Private/index';
import ParamRestrictedRoute from './ParamRestricted';

import LandingPage from '@pages/LandingPage';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MainRouter = () => {
  return (
    <Fragment>
      <Router>
      <ToastContainer />
        <ScrollToTop />
        <Routes>
          <Route path={URL.HOME} element={<LandingPage />} />

          {/* <Route path={URL.SIGN_UP} element={<PublicRoute element={<SignUp />} />} />
          <Route path={URL.SIGN_IN} element={<PublicRoute element={<SignIn />} />} />
          <Route
            path={URL.FORGOT_PASSWORD}
            element={<PublicRoute element={<ForgotPassword />} />}
          />
          <Route
            path={URL.RESET_PASSWORD}
            element={<ParamRestrictedRoute param={KEYWORDS.TOKEN} element={<ResetPassword />} />}
          /> */}

          {/* Private Routes */}

          {/* <Route path={URL.DASHBOARD} element={<PrivateRoute element={<DashboardPage />} />} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
};

export default MainRouter;
