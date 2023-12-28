import React, { Fragment, lazy } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { KEYWORDS, URL } from "@config/Constants"

const ForgotPassword = lazy(() => import("@views/auth/ForgotPassword"))
const SignIn = lazy(() => import("@views/auth/SignIn"))
const SignUp = lazy(() => import("@views/auth/SignUp"))
const DownloadApp = lazy(() => import("@views/landing/DownloadApp"))
const Home = lazy(() => import("@views/landing/Home"))
const NotPageFound = lazy(() => import("@views/landing/NotFound"))
const PTECourse = lazy(() => import("@views/pte-course"))
const PTECourseSingle = lazy(() => import("@views/pte-course/PTECourseSingle"))
const ReactScrollToTop = lazy(() => import("@utils/ReactScrollToTop"))
const PTEGuide = lazy(() => import("@views/landing/PTEGuide"))
const DashboardPage = lazy(() => import("@views/dashboard"))

import PublicRoute from "./Public/index"
import PrivateRoute from "./Private/index"
import ParamRestrictedRoute from "./ParamRestricted"

// Reading Test Components
const FIBSelectReadingTest = lazy(() => import("@views/reading-test/FIBSelectReadingTest"))
const MCMReadingTest = lazy(() => import("@views/reading-test/MCMReadingTest"))
const ROReadingTest = lazy(() => import("@views/reading-test/ROReadingTest"))
const FIBTextReadingTest = lazy(() => import("@views/reading-test/FIBTextReadingTest"))
const MCSReadingTest = lazy(() => import("@views/reading-test/MCSReadingTest"))

// Listening Test Components
const SSTListeningTest = lazy(() => import("@views/listening-test/SSTListeningTest"))
const MCMListeningTest = lazy(() => import("@views/listening-test/MCMListeningTest"))
const MCSListeningTest = lazy(() => import("@views/listening-test/MCSListeningTest"))
const HCSListeningTest = lazy(() => import("@views/listening-test/HCSListeningTest"))
const SMWListeningTest = lazy(() => import("@views/listening-test/SMWListeningTest"))
const FIBTextListeningTest = lazy(() => import("@views/listening-test/FIBTextListeningTest"))
const HIWListeningTest = lazy(() => import("@views/listening-test/HIWListeningTest"))
const WFDListeningTest = lazy(() => import("@views/listening-test/WFDListeningTest"))

// Writing Test Components
const SWTWritingTest = lazy(() => import("@views/writing-test/SWTWritingTest"))
const WEWritingTest = lazy(() => import("@views/writing-test/WEWritingTest"))

// Speaking Test Components
const RASpeakingTest = lazy(() => import("@views/speaking-test/RASpeakingTest"))
const RSSpeakingTest = lazy(() => import("@views/speaking-test/RSSpeakingTest"))
const DISpeakingTest = lazy(() => import("@views/speaking-test/DISpeakingTest"))
const RLSpeakingTest = lazy(() => import("@views/speaking-test/RLSpeakingTest"))
const ASQSpeakingTest = lazy(() => import("@views/speaking-test/ASQSpeakingTest"))

const ResetPassword = lazy(() => import("@views/auth/ResetPassword"))
const VipCenter = lazy(() => import("@views/landing/VipCenter"))
const ProfileCenter = lazy(() => import("@views/landing/ProfileCenter"))
const FAQs = lazy(() => import("@views/landing/FAQs"))
const ContactUs = lazy(() => import("@views/landing/ContactUs"))
const Changelog = lazy(() => import("@views/landing/Changelog"))
const PaymentSession = lazy(() => import("@views/landing/PaymentSession"))

const MainRouter = () => {
  return (
    <Fragment>
      <Router>
        <Toaster />
        <ReactScrollToTop />
        <Routes>
          {/* Other Routes */}
          <Route path={URL.HOME} element={<Home />} />
          <Route path={URL.DOWNLOAD_APPLICATION} element={<DownloadApp />} />
          <Route path={URL.PTE_COURSE_ALL} element={<PTECourse />} />
          <Route path={URL.PTE_COURSE_SINGLE} element={<PTECourseSingle />} />
          <Route path={URL.PTE_GUIDE} element={<PTEGuide />} />
          <Route path={URL.NOT_FOUND_PAGE} element={<NotPageFound />} />
          <Route path={URL.CONTACT_US} element={<ContactUs />} />
          <Route path={URL.FAQ} element={<FAQs />} />
          <Route path={URL.CHANGELOG} element={<Changelog />} />
          <Route path={URL.PAYMENT_SESSION} element={<PaymentSession />} />

          {/* Public Routes */}
          <Route path={URL.SIGN_UP} element={<PublicRoute element={<SignUp />} />} />
          <Route path={URL.SIGN_IN} element={<PublicRoute element={<SignIn />} />} />
          <Route path={URL.FORGOT_PASSWORD} element={<PublicRoute element={<ForgotPassword />} />} />
          <Route
            path={URL.RESET_PASSWORD}
            element={<ParamRestrictedRoute param={KEYWORDS.TOKEN} element={<ResetPassword />} />}
          />

          {/* Private Routes */}

          <Route path={URL.PROFILE_CENTER} element={<PrivateRoute element={<ProfileCenter />} />} />

          <Route path={URL.VIP_CENTER} element={<PrivateRoute element={<VipCenter />} />} />
          <Route path={URL.DASHBOARD} element={<PrivateRoute element={<DashboardPage />} />} />

          {/* Reading Test Routes */}
          <Route path={URL.READING_TEST.FIB_SELECT} element={<PrivateRoute element={<FIBSelectReadingTest />} />} />
          <Route path={URL.READING_TEST.MCM} element={<PrivateRoute element={<MCMReadingTest />} />} />
          <Route path={URL.READING_TEST.RO} element={<PrivateRoute element={<ROReadingTest />} />} />
          <Route path={URL.READING_TEST.FIB_TEXT} element={<PrivateRoute element={<FIBTextReadingTest />} />} />
          <Route path={URL.READING_TEST.MCS} element={<PrivateRoute element={<MCSReadingTest />} />} />

          {/* Listening Test Routes */}
          <Route path={URL.LISTENING_TEST.SST} element={<PrivateRoute element={<SSTListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.FIB_TEXT} element={<PrivateRoute element={<FIBTextListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.MCM} element={<PrivateRoute element={<MCMListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.MCS} element={<PrivateRoute element={<MCSListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.HCS} element={<PrivateRoute element={<HCSListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.SMW} element={<PrivateRoute element={<SMWListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.HIW} element={<PrivateRoute element={<HIWListeningTest />} />} />
          <Route path={URL.LISTENING_TEST.WFD} element={<PrivateRoute element={<WFDListeningTest />} />} />

          {/* Listening Test Routes */}
          <Route path={URL.WRITING_TEST.SWT} element={<PrivateRoute element={<SWTWritingTest />} />} />
          <Route path={URL.WRITING_TEST.WE} element={<PrivateRoute element={<WEWritingTest />} />} />

          {/* Speaking Test Routes */}
          <Route path={URL.SPEAKING_TEST.RA} element={<PrivateRoute element={<RASpeakingTest />} />} />
          <Route path={URL.SPEAKING_TEST.RS} element={<PrivateRoute element={<RSSpeakingTest />} />} />
          <Route path={URL.SPEAKING_TEST.DI} element={<PrivateRoute element={<DISpeakingTest />} />} />
          <Route path={URL.SPEAKING_TEST.RL} element={<PrivateRoute element={<RLSpeakingTest />} />} />
          <Route path={URL.SPEAKING_TEST.ASQ} element={<PrivateRoute element={<ASQSpeakingTest />} />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default MainRouter
