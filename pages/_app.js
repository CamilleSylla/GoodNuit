import '../styles/globals.css'
import Router from 'next/router'
import Navbar from '../theme/NavBar/Navbar'
import 'nprogress/nprogress'
import nProgress from 'nprogress'


Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
