import "../styles/globals.css";
import Router from "next/router";
import "nprogress/nprogress";
import nProgress from "nprogress";
import Navbar from "../components/Section/Global/NavBar/Navbar";
import Footer from "../components/Section/Global/Footer/Footer";
import { CartProvider } from "../contexts/cart";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default MyApp;
