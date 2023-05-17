import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
import {SessionProvider, SessionProviderProps} from "next-auth/react"

export default function App({ Component, pageProps }: AppProps, {session}: SessionProviderProps) {
// export default function App({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
