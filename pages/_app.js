import '../styles/globals.css'
import '../styles/bootstrap.min.css';
import Layout from '../components/layout/index'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return( 
  <Layout>
     <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
