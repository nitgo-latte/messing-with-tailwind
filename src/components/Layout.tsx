import Head from "next/head"
import FooterBar from "./FooterBar"
import NavBar from "./Navbar"

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Adsagency.ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <FooterBar />
    </div>
  )
}

export default Layout