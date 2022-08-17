import React from "react";
import "animate.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home({ identity }) {
  return (
    <section className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
      <img
        className="mb-6 object-cover object-top rounded-full h-40 w-40"
        alt="mahib"
        src={identity.image}
      />

      <div className="flex flex-col text-center w-full">
        <h1 className="text-3xl font-medium mb-2 text-gray-900 dark:text-slate-200 animate__animated animate__infinite animate__slower animate__pulse">
          {identity.welcomeText}
        </h1>

        <div className="mx-auto text-xl text-gray-900 dark:text-slate-300 mb-8">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#3F3D56"
            multiText={identity.typeWriterText}
            multiTextDelay={2000}
            typeSpeed={50}
            multiTextLoop={true}
          />
        </div>

        <div className="lg:w-2/3 mx-auto text-center">
          <p className="dark:text-slate-300 text-slate-800 text-xl leading-relaxed">
            {identity.descriptionText}
          </p>
        </div>
      </div>
    </section>
  );
}
