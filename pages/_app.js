import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store";
// import NetworkService from "../utils/interceptor";
// import ApiService from "../utils/ApiService";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /* useEffect(() => {
    console.log("TCL: MyApp -> loading");
    NetworkService.setupInterceptors();
    ApiService.init();
  }, []); */

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
/* static async getInitialProps({ Component, ctx }) {
  let pageProps = {};
  const { store } = ctx;

  if (!isClient()) ApiService.init(store);

  if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
} */

/* export async function getInitialProps({ Component, ctx }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };

  // #############    OR  #############

  let pageProps = {};
  // const { store } = ctx;

  // if (!isClient())

  console.log("TCL: getInitialProps -> @@@@@");
  ApiService.init();
  NetworkService.setupInterceptors();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
} */

export default wrapper.withRedux(MyApp);
// export default MyApp;
