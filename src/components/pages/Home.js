import React from "react";
import "animate.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home({ identity }) {
  return (
    <section className="container px-5 py-40 md:py-64 lg:py-52 mx-auto">
      <div className="flex flex-col text-center w-full">
        <h1 className="text-3xl font-medium mb-4 text-gray-900 dark:text-slate-200 animate__animated animate__infinite animate__slower animate__pulse">
          {identity.welcomeText}
        </h1>

        <div className="mx-auto text-xl text-gray-900 dark:text-slate-300">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#3F3D56"
            multiText={identity.typeWriterText}
            multiTextDelay={2000}
            typeSpeed={50}
            multiTextLoop={true}
          />
        </div>
      </div>
    </section>
  );
}
