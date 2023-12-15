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
                    Full-stack Engineer adept in robust C# and .NET backend
                    development for scalable, secure web systems. Proficient in
                    crafting captivating user experiences through javaScript-driven
                    responsive frontends. Committed to delivering high-quality,
                    end-to-end applications that exceed user expectations.
                    Advocate for collaborative innovation, staying updated on tech
                    trends to deliver exceptional software solutions. Dedicated to
                    creating impactful software bridging art and science for lasting
                    business success.
               </p>
          </div>
     );
}

export default AboutMe;
