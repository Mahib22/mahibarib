import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container mx-auto flex items-center justify-between py-5 2xl:py-6">
      <Link
        to="/"
        className="font-bold text-2xl lg:text-3xl 2xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500"
      >
        mahibarib.
      </Link>
      <Link to="/" className="text-lg 2xl:text-2xl text-sky-500">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
    </div>
  );
}
