import React from 'react'
import '../styles/globals.css'

interface MyAppProps {
  Component: any
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
