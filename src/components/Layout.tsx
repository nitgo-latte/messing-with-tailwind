import Head from "next/head"
import { Footer } from "flowbite-react"
import NavBar from "./Navbar"

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const FooterBar = () => {
  return (
    <Footer container={true} className="border-t border-gray-300">
      <Footer.LinkGroup className="flex flex-wrap mb-2 justify-center sm:justify-start gap-x-3">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
      <Footer.Copyright href="#" by="adsgency.ai™" year={2023} />
    </Footer>
  )
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Adsagency.ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex-grow">{children}</div>
      <FooterBar />
    </div>
  )
}

export default Layout
