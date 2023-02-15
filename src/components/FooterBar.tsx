import { Footer } from "flowbite-react"

const FooterBar = () => {
  return (
    <Footer container={true} className="mt-auto border-t border-gray-300">
      <Footer.Copyright href="#" by="adsgency.ai™" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterBar
