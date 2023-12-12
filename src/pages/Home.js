import {
  faDev,
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightLong,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="py-8 lg:py-0 lg:h-screen">
      <div className="flex h-full lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-5/6 lg:w-1/2 lg:pr-28 flex flex-col lg:items-start order-last lg:order-first">
          <h1 className="text-4xl 2xl:text-5xl mb-4 font-semibold text-gray-900">
            Freelance Web Developer & IT Enthusiast
          </h1>

          <p className="mb-8 text-lg 2xl:text-2xl leading-relaxed text-gray-700">
            Selamat datang di web portofolio saya! 👋 Saya terbuka untuk bekerja
            sama dan menghadirkan solusi kreatif untuk proyek-proyek Anda.
            Jelajahi portofolio saya dan mari diskusikan bagaimana kita bisa
            berkolaborasi untuk mencapai tujuan bersama.
          </p>

          <div className="flex lg:flex-row flex-col gap-4 lg:mb-8">
            <button className="flex items-center justify-center gap-2 bg-sky-500 border-0 py-2 2xl:py-3 px-6 2xl:px-8 text-white hover:bg-sky-600 rounded font-medium 2xl:text-xl">
              <FontAwesomeIcon icon={faEnvelope} />
              Hubungi Saya
            </button>
            <Link
              to="portofolio"
              className="py-2 2xl:py-3 px-6 2xl:px-8 2xl:text-xl rounded border-sky-500 border-2 flex items-center justify-center gap-2 font-medium"
            >
              Lihat Portofolio
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>

        <div className="lg:max-w-sm lg:w-1/2 mb-8 md:max-w-xs lg:mb-0">
          <img
            className="object-cover object-center rounded-2xl"
            alt="profile"
            src="mahib.jpg"
          />

          <div className="flex items-center gap-8 justify-center mt-4">
            <a
              href="https://github.com/Mahib22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8 2xl:w-10 2xl:h-10 text-gray-500 hover:text-gray-900"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mahib-arib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-8 h-8 2xl:w-10 2xl:h-10 text-gray-500 hover:text-blue-900"
              />
            </a>
            <a
              href="https://mahib-arib.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faMedium}
                className="w-8 h-8 2xl:w-10 2xl:h-10 text-gray-500 hover:text-gray-900"
              />
            </a>
            <a
              href="https://dev.to/mahib22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDev}
                className="w-8 h-8 2xl:w-10 2xl:h-10 text-gray-500 hover:text-gray-900"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
