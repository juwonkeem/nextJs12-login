import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/custom.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/common/Layout'
import Loading from '@/components/common/Loading'
import Alert from '@/components/common/Alert'
import LoginPage from './sample/login'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        <LoginPage />
      </SessionProvider>  
    </>
  )
}

export default App
