import React from "react";
import MyImg from "../../images/mahib.jpg";

export default function About() {
  return (
    <section className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
      <img
        className="mb-5 object-cover object-top rounded-full h-40 w-40"
        alt="mahib"
        src={MyImg}
      />

      <div className="text-center md:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Microdosing synth tattooed vexillologist
        </h1>
        <p className="mb-8 leading-relaxed">
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
          tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
          ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
          meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth
          af fingerstache pitchfork.
        </p>
      </div>
    </section>
  );
}
