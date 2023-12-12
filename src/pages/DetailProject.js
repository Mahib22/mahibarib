import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";

export default function DetailProject({ projects }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let { slug } = useParams();
  let data = projects.find((item) => item.slug === slug);

  return (
    <div className="py-5 animate__animated animate__fadeInUp">
      <div className="flex justify-end border-b">
        <Link
          to="/portofolio"
          className="text-2xl 2xl:text-4xl text-gray-900 mb-2"
        >
          <FontAwesomeIcon icon={faXmark} />
        </Link>
      </div>

      <div className="py-4">
        <div className="md:w-1/2 mx-auto py-4 2xl:py-6">
          <Swiper
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Autoplay]}
            autoplay={{
              delay: 2500,
            }}
            className="md:h-96 mb-2"
          >
            {data.img.map((item, id) => (
              <SwiperSlide key={id}>
                <img alt={`img-${id}`} src={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
          >
            {data.img.map((item, id) => (
              <SwiperSlide key={id}>
                <img alt={`img-${id}`} src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h1 className="font-bold text-2xl 2xl:text-4xl uppercase py-2">
          {data.title}
        </h1>

        <p className="leading-relaxed tracking-wide 2xl:text-2xl 2xl:tracking-widest">
          {data.description}
        </p>

        <p className="pt-4 2xl:pt-6 text-sm 2xl:text-xl">
          Link Demo :
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500"
          >
            {` ${data.link}`}
          </a>
        </p>

        <div className="py-4 2xl:py-6 flex flex-wrap gap-2">
          {data.tech.map((item, id) => (
            <span
              key={id}
              className="bg-slate-200 rounded-full py-1 2xl:py-2 px-4 2xl:px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
