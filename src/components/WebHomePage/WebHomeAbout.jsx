import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomeAbout() {
  const sectionRef = useRef(null);
  const circlesRef = useRef([]);
  const [openData, setOpenData] = useState("integrity")
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -100",
          end: "+=900", // scroll distance for animation
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Step 1: Fade in + settle
      tl.from(circlesRef.current, {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
      });

      // Step 2: Custom scroll movement for each one
      tl.to(
        circlesRef.current,
        {
          x: (i) =>
            i === 0
              ? -530 // first circle → moves far right
              : i === 1
                ? -320 // second → slightly right
                : i === 2
                  ? -110 // third → small move right
                  : i === 3
                    ? 100 // fourth → small move left
                    : i === 4
                      ? 310 // fifth → more left
                      : 520, // sixth → far left
          y: (i) =>
            i === 0
              ? 0
              : i === 1
                ? 0
                : i === 2
                  ? 0
                  : i === 3
                    ? 0
                    : i === 4
                      ? 0
                      : 0, // give some up/down variety
          rotation: (i) =>
            i === 0
              ? 0
              : i === 1
                ? 0
                : i === 2
                  ? 0
                  : i === 3
                    ? 0
                    : i === 4
                      ? 0
                      : 0,
          scale: (i) =>
            i === 0
              ? 1
              : i === 1
                ? 1
                : i === 2
                  ? 1
                  : i === 3
                    ? 1
                    : i === 4
                      ? 1
                      : 1,
          duration: 2,
          ease: "power3.inOut",
        },
        "+=0.5" // slight delay after fade-in
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-60 mx-20">
      <p className="font-semibold text-sm text-center">
        (Some achievements we’ve recently achieved)
      </p>
      <h1 className="title font-[500] text-[8rem] text-center mb-10">Our Values</h1>
      <div className="relative">
        <div className="flex justify-center gap-6 mx-auto w-full mb-40 relative z-50">
          <p
            ref={(el) => (circlesRef.current[0] = el)}
            onClick={() => setOpenData("integrity")}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Integrity
          </p>
          {openData === "integrity" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We conduct our business with honesty and transparency, building
                <span className="bg-[#ff5623] text-white mx-2"> trust with our clients </span> and partners.</p>
            </div>
          )}
          <p
            ref={(el) => (circlesRef.current[1] = el)}
            onClick={() => setOpenData("innovation")}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Innovation
          </p>
          {openData === "innovation" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We embrace change and encourage
                <span className="bg-[#ff5623] text-white mx-2"> innovative thinking to stay ahead  </span> in a rapidly evolving industry.</p>
            </div>
          )}
          <p
            ref={(el) => (circlesRef.current[2] = el)}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Excellence
          </p>
          {openData === "excellence" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We embrace change and encourage
                <span className="bg-[#ff5623] text-white mx-2"> innovative thinking to stay ahead  </span> in a rapidly evolving industry.</p>
            </div>
          )}
          <p
            ref={(el) => (circlesRef.current[3] = el)}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Collaboration
          </p>
          {openData === "collab" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We embrace change and encourage
                <span className="bg-[#ff5623] text-white mx-2"> innovative thinking to stay ahead  </span> in a rapidly evolving industry.</p>
            </div>
          )}
          <p
            ref={(el) => (circlesRef.current[4] = el)}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Glow
          </p>
          {openData === "glow" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We embrace change and encourage
                <span className="bg-[#ff5623] text-white mx-2"> innovative thinking to stay ahead  </span> in a rapidly evolving industry.</p>
            </div>
          )}
          <p
            ref={(el) => (circlesRef.current[5] = el)}
            className="border-2 border-[#ff5623] rounded-full h-50 w-50 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%] cursor-pointer"
          >
            Nova
          </p>
          {openData === "nova" && (
            <div className="mt-80">
              <p className="text-[3rem] text-center">We embrace change and encourage
                <span className="bg-[#ff5623] text-white mx-2"> innovative thinking to stay ahead  </span> in a rapidly evolving industry.</p>
            </div>
          )}
        </div>
        <div>
          <h1 className="absolute top-0 right-10 text-[11rem]  ">WEB SHADOW</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
