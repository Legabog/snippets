import { FC } from 'react'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { Layout } from '@/components' 

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp