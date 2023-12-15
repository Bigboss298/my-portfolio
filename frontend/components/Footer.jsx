import React from "react";

function Footer() {

  return (
    <div className=" py-5 flex justify-center [&>*]:scale-90 lg:gap-6">
      <a
        href="https://github.com/Bigboss298"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Github.png"
          alt="github"
          className="w-14 md:w-16 xl:w-fit"
        />
      </a>

      {/* <a
        href="https://twitter.com/"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/TwitterX.png"
          alt="twitter"
          className="w-14 md:w-16 xl:w-fit"
        />
      </a> */}
      {/* <a
        href="https://instagram.com/web___craft"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Instagram.png"
          alt="instagram"
          className="w-14 md:w-16 xl:w-fit"
        />
      </a> */}
      <a
        href="www.linkedin.com/in/abdullah-bisiriyu-7694ab255"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Linkedin.png"
          alt="linkedin"
          className="w-14 md:w-16 xl:w-fit"
        />
      </a>
    </div>
  );
}

export default Footer;
