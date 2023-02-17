import { Avatar, Button, Dropdown, Navbar } from "flowbite-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"

type ProfileDropdownProps = {
  user:
    | {
        name?: string | null
        email?: string | null
        image?: string | null
      }
    | undefined
}

const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
  const logOut = async () => {
    await signOut()
  }
  const nameOrEmail = user ? user.name || user.email : "username"
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">{nameOrEmail}</span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

const NavBar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const { pathname } = router

  const loginFlow = async () => {
    await signIn()
  }

  return (
    <Navbar
      fluid={false}
      rounded={true}
      className="p-3 flex flex-row border border-gray-300 sm:flex-row justify-between items-center"
    >
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faRobot} bounce color="dark" />
        <span className="ml-2 self-center whitespace-nowrap text-xl font-normal dark:text-white">
          adsgency.ai
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="">About</Navbar.Link>
        <Navbar.Link href="">Services</Navbar.Link>
        <Navbar.Link href="">Pricing</Navbar.Link>
        <Navbar.Link href="">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        {!session ? (
          <Button onClick={loginFlow} color={"dark"}>
            Login
          </Button>
        ) : (
          <ProfileDropdown user={session.user} />
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default NavBar
