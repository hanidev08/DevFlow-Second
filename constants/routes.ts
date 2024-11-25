const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask_question",
  PROFILE: (id: string) => `/ptofile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  QUESTION: (id: string) => `/ask_question/${id}`,
};

export default ROUTES;
