import "antd/dist/reset.css"
import "@/styles/globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
config.autoAddCss = false

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
