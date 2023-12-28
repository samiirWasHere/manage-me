
import { nanoid } from "nanoid"

/* --- Server --- */
export const SERVER_BASE = process.env.REACT_APP_SERVER_BASE || "http://localhost:3001"
export const SERVER = SERVER_BASE + "/api"

export const USER_ID = "64e75a2b261f8b3ffcbad14b"

export const PHONETICS_API_URL = process.env.REACT_APP_PHONETICS_API_URL || ""

export const TWIN_WORD_DEFINITION_API_URL = process.env.REACT_APP_TWIN_WORD_DEFINITION_API_URL || ""

export const TWIN_WORD_EXAMPLE_API_URL = process.env.REACT_APP_TWIN_WORD_EXAMPLE_API_URL || ""

export const TWIN_WORD_API_HOST = process.env.REACT_APP_TWIN_WORD_API_HOST || ""

export const TWIN_WORD_API_KEY = process.env.REACT_APP_TWIN_WORD_API_KEY || ""

export const KEYWORDS = {
  TOKEN: "token"
}

/* --- URLS --- */
export const URL = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  DOWNLOAD_APPLICATION: "/download-application",
  PTE_COURSE_ALL: "/pte-course-all",
  PTE_COURSE_SINGLE: "/pte-course/:id",
  PTE_GUIDE: "/pte-guide",
  VIP_CENTER: "/vip-center",
  PROFILE_CENTER: "/profile-center",
  FAQ: "/faq",
  CONTACT_US: "/contact-us",
  DASHBOARD: "/dashboard",
  CHANGELOG: "/changelog",
  PAYMENT_SESSION: "/payment-session",
  PTE_OFFICIAL: "https://pearsonpte.com/",
  PTE_PRACTICE: "https://www.ptepractice.com/",
  PTE_TEST: "https://pearsonpte.com/book-now/",
  PTE_CONTACT: "https://pearsonpte.com/contact-us/",
  READING_TEST: {
    FIB_SELECT: "/reading-test-fib-select/:id",
    MCM: "/reading-test-mcm/:id",
    RO: "/reading-test-ro/:id",
    FIB_TEXT: "/reading-test-fib-text/:id",
    MCS: "/reading-test-mcs/:id"
  },
  LISTENING_TEST: {
    SST: "/listening-test-sst/:id",
    MCM: "/listening-test-mcm/:id",
    FIB_TEXT: "/listening-test-fib-text/:id",
    HCS: "/listening-test-hcs/:id",
    MCS: "/listening-test-mcs/:id",
    SMW: "/listening-test-smw/:id",
    HIW: "/listening-test-hiw/:id",
    WFD: "/listening-test-wfd/:id"
  },
  WRITING_TEST: {
    SWT: "/writing-test-swt/:id",
    WE: "/writing-test-we/:id"
  },
  SPEAKING_TEST: {
    RA: "/speaking-test-ra/:id",
    RS: "/speaking-test-rs/:id",
    DI: "/speaking-test-di/:id",
    RL: "/speaking-test-rl/:id",
    ASQ: "/speaking-test-asq/:id"
  },
  NOT_FOUND_PAGE: "*"
}

/* --- Requests --- */
export const REQ = {
  STATUS: SERVER + "/auth",
  USER: {
    SIGN_IN: SERVER + "/auth/signin",
    SIGN_UP: SERVER + "/auth/signup",
    GOOGLE_SIGN_IN: SERVER + "/auth/google-signin",
    VERIFY: SERVER + "/auth/verify-user",
    FORGOT_PASSWORD: SERVER + "/auth/forgotPassword",
    UPDATE: SERVER + "/user/:id",
    RESET_PASSWORD: SERVER + "/auth/reset-password"
  },
  SUBSCRIPTION: {
    GET_FILTERED_SUBSCRIPTIONS: SERVER + "/subscription/paginated-filters",
    CREATE_SUBSCRIPTION: SERVER + "/subscription/stripe/create-checkout-session",
    UPDATE_SUBSCRIPTION: SERVER + "/subscription/:id",
    MANAGE_BILLING_PORTAL: SERVER + "/subscription/stripe/create-portal-session"
  },
  READING_TEST: {
    GET_ALL_READING_TEST: SERVER + "/reading-test/paginated",
    GET_SINGLE_READING_TEST: SERVER + "/reading-test/:id",
    CREATE_READING_TEST_SUBMISSION: SERVER + "/reading-test-submission",
    GET_ALL_READING_TEST_SUBMISSIONS: SERVER + "/reading-test-submission/paginated",
    ADD_DONE_TAG: SERVER + "/reading-test/done",
    REMOVE_DONE_TAG: SERVER + "/reading-test/undone",
    RESET_DONE_TAGS: SERVER + "/reading-test/reset-done-tag",
    ADD_BOOKMARK: SERVER + "/reading-test/add-bookmark",
    REMOVE_BOOKMARK: SERVER + "/reading-test/remove-bookmark"
  },
  LISTENING_TEST: {
    GET_ALL_LISTENING_TEST: SERVER + "/listening-test/paginated",
    GET_SINGLE_LISTENING_TEST: SERVER + "/listening-test/:id",
    CREATE_LISTENING_TEST_SUBMISSION: SERVER + "/listening-test-submission",
    GET_ALL_LISTENING_TEST_SUBMISSIONS: SERVER + "/listening-test-submission/paginated",
    ADD_DONE_TAG: SERVER + "/listening-test/done",
    REMOVE_DONE_TAG: SERVER + "/listening-test/undone",
    RESET_DONE_TAGS: SERVER + "/listening-test/reset-done-tag",
    ADD_BOOKMARK: SERVER + "/listening-test/add-bookmark",
    REMOVE_BOOKMARK: SERVER + "/listening-test/remove-bookmark"
  },
  WRITING_TEST: {
    GET_ALL_WRITING_TEST: SERVER + "/writing-test/paginated",
    GET_SINGLE_WRITING_TEST: SERVER + "/writing-test/:id",
    CREATE_WRITING_TEST_SUBMISSION: SERVER + "/writing-test-submission",
    GET_ALL_WRITING_TEST_SUBMISSIONS: SERVER + "/writing-test-submission/paginated",
    ADD_DONE_TAG: SERVER + "/writing-test/done",
    REMOVE_DONE_TAG: SERVER + "/writing-test/undone",
    RESET_DONE_TAGS: SERVER + "/writing-test/reset-done-tag",
    ADD_BOOKMARK: SERVER + "/writing-test/add-bookmark",
    REMOVE_BOOKMARK: SERVER + "/writing-test/remove-bookmark"
  },
  SPEAKING_TEST: {
    GET_ALL_SPEAKING_TEST: SERVER + "/speaking-test/paginated",
    GET_SINGLE_SPEAKING_TEST: SERVER + "/speaking-test/:id",
    CREATE_SPEAKING_TEST_SUBMISSION: SERVER + "/speaking-test-submission",
    GET_ALL_SPEAKING_TEST_SUBMISSIONS: SERVER + "/speaking-test-submission/paginated",
    ADD_DONE_TAG: SERVER + "/speaking-test/done",
    REMOVE_DONE_TAG: SERVER + "/speaking-test/undone",
    RESET_DONE_TAGS: SERVER + "/speaking-test/reset-done-tag",
    ADD_BOOKMARK: SERVER + "/speaking-test/add-bookmark",
    REMOVE_BOOKMARK: SERVER + "/speaking-test/remove-bookmark"
  },
  PTE_LESSON: {
    GET_ALL_PTE_LESSON: SERVER + "/pte-lesson/paginated",
    GET_SINGLE_PTE_LESSON: SERVER + "/pte-lesson/:id"
  },
  CONTACT_US: {
    CREATE_CONTACT_US_SUBMISSION: SERVER + "/contact-us"
  },
  BOOKMARKS: {
    GET_ALL_BOOKMARKS: SERVER + "/bookmark",
    GET_SINGLE_BOOKMARK: SERVER + "/bookmark/:id",
    CREATE_BOOKMARKS_SUBMISSION: SERVER + "/bookmark",
    DELETE_BOOKMARKS_BY_ID: SERVER + "/bookmark/:id"
  }
}

/* --- HTTP Status Codes --- */
export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}

/* --- Validation Regex Exp --- */
export const EMAIL_REGEX = /\S+@\S+\.\S+/
export const PASSWORD_REGEX = /.{6,}/
export const PHONE_NUMBER_REGEX = /^(?:\+92|92)?[0-9]{10}$/
export const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/
