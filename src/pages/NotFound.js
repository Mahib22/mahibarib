import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid place-content-center">
      <div className="text-center pb-8">
        <img src="404.png" alt="404" className="md:h-80 2xl:h-96" />
        <p className="text-gray-900 font-bold text-2xl 2xl:text-4xl pb-4 2xl:pb-8">
          We can't find that page.
        </p>
        <Link
          to="/"
          className="rounded 2xl:rounded-lg bg-sky-500 px-5 2xl:px-12 py-3 text-sm 2xl:text-xl font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
