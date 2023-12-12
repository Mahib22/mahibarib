import { Link } from "react-router-dom";

export default function Card({ title, slug, img }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeInUp">
      <div className="relative">
        <Link to={`/detail/${slug}`}>
          <img
            src={img[0]}
            alt={title}
            className="w-full h-64 rounded-xl hover:scale-105 transition duration-2000 ease-out"
          />
          <div className="absolute backdrop-blur-md bg-white/30 left-4 bottom-4 rounded-lg px-4 py-2">
            <p className="text-gray-900 font-medium text-lg 2xl:text-xl">
              {title}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
