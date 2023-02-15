import {
  faGitSquare,
  faGithub,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Beverage = () => (
  <div>
    <h1 className="title">
      <FontAwesomeIcon icon={faGitSquare} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faSearchengin} />
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  </div>
)
