import '../styles/globals.css'
import Navbar from '../theme/NavBar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
