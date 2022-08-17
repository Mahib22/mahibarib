import React from "react";
import {
  faCloudArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../section/SocialIcon";
import ContactItem from "../section/ContactItem";

export default function Contact({ identity }) {
  return (
    <section className="container px-5 py-12 md:py-32 mx-auto">
      <div className="lg:w-2/3 mx-auto text-center">
        <p className="dark:text-slate-300 text-slate-800 text-xl">
          {identity.contactText}
        </p>

        <div className="lg:inline-flex lg:items-center gap-2 mt-2">
          <ContactItem
            link={"mailto:" + identity.socialLink.mail}
            icon={faEnvelope}
            text={identity.socialLink.mail}
          />
          <ContactItem
            link={identity.socialLink.resume}
            icon={faCloudArrowDown}
            text="Download CV"
          />
        </div>

        <p className="mt-12 dark:text-slate-300 text-slate-800 text-lg font-bold">
          Follow me on
        </p>

        <div className="flex justify-around mt-2 mx-auto dark:text-white md:w-1/3">
          <SocialIcon link={identity.socialLink.github} icon={faGithub} />
          <SocialIcon link={identity.socialLink.linkedin} icon={faLinkedinIn} />
          <SocialIcon link={identity.socialLink.medium} icon={faMedium} />
          <SocialIcon link={identity.socialLink.devto} icon={faDev} />
        </div>
      </div>
    </section>
  );
}
