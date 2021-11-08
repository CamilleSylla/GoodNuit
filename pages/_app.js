import '../styles/globals.css'
import Router from 'next/router'
import 'nprogress/nprogress'
import nProgress from 'nprogress'
import Navbar from '../components/Section/Global/NavBar/Navbar'
import Footer from '../components/Section/Global/Footer/Footer'


Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
