import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function AboutMe() {
     useEffect(() => {
          Aos.init();
     });
     return (
          <div className=" text-center self-center my-5 md:my-0 space-y-6">
               <h1 className="font-semibold text-4xl md:text-[60px] inline-block border-purple-700">
                    💡🖥️
               </h1>
               <p className="text-sm leading-[26px] md:text-lg md:leading-relaxed lg:text-2xl text-center lg:leading-relaxed font-poppins-extralight">
               Full-Stack Software Engineer with 3+ years of experience building scalable, secure web applications using C#, ASP.NET, and React.js. Adept at robust backend development, API integration, and crafting responsive, JavaScript-driven frontends that enhance user experience. Passionate about delivering high-quality, end-to-end solutions that bridge art and science for lasting business success. Committed to collaborative innovation, staying updated on tech trends, and leveraging technology to solve real-world problems in both remote and on-site environments.
               </p>
          </div>
     );
}

export default AboutMe;
