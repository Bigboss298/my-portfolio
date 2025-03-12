import React from "react";

function Links() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <div className="flex mx-auto w-11/12 flex-col md:flex-row justify-between [&>*]:py-5 text-xl lg:text-3xl [&>*]:border-2 [&>*]:border-dashed [&>*]:w-full gap-10 xl:gap-20 text-center">
      <a
        href="https://linktr.ee/Bigboss288"
        target="_blank"
        className="flex gap-2 md:gap-5 justify-center"
      >
        <img src="/images/icons/socials.svg" alt="" className="self-center" />
        <span className="self-center">Socials</span>
      </a>
      <a
        href="https://docs.google.com/document/d/1ClWXu3l9hlK8-EvPNJ-F0dSZXrRzPTrC/edit?usp=sharing&ouid=117180520676069417310&rtpof=true&sd=true"
        target="_blank"
        className="flex gap-2 md:gap-5 justify-center"
      >
        <img src="/images/icons/cv.svg" alt="" className="self-center" />
        <span className="self-center">Access Cv</span>
      </a>
      <div
        onClick={() => scrollToSection("projects")}
        className="flex gap-2 md:gap-5 justify-center"
      >
        <img src="/images/icons/projects.svg" alt="" className="self-center" />
        <span className="self-center">Projects</span>
      </div>
    </div>
  );
}

export default Links;
