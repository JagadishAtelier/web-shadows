import React from "react";
import "./HeroSection.css";
import { ArrowDown, Facebook, Globe2, Instagram, Linkedin, Twitter } from "lucide-react";
import HomeAbout from "./HomeAbout";

function HeroSection() {
    const images = [
        "https://img.freepik.com/free-photo/male-indian-programmer-working-desktop-computer-white-desk-office_231208-3636.jpg?w=740&q=80",
        "https://img.freepik.com/free-photo/close-up-young-indian-programmer-using-computer-office_231208-3638.jpg?w=740&q=80",
        "https://img.freepik.com/free-photo/indian-developer-coding-laptop-office_231208-3641.jpg?w=740&q=80",
        "https://img.freepik.com/free-photo/indian-programmer-typing-laptop-modern-office_231208-3640.jpg?w=740&q=80",
    ];

    return (
        <div className="ms-30 me-10 relative mt-10">
            <div className="flex justify-between items-start">
            <div className="w-[900px]">
                {/* Row 1 */}
                <div className="flex items-center gap-3">
                    <h1 className="font-[500] m-0 text-[8rem]">We</h1>
                    <img
                        src={images[0]}
                        className="w-80 h-[25vh] rounded-md object-cover"
                        alt="main"
                    />
                    <h1 className="font-[500] text-[8rem]">Tell</h1>
<p
  className="text-[#ff5623] font-bold text-[8rem]"
  style={{
    animation: "spin 3s linear infinite",
  }}
>
  *
</p>
                </div>

                {/* Row 2 */}
                <div className="flex justify-end">
                    <h1 className="font-[500] text-[#ff5623] text-[8rem]">Web Shadows</h1>
<p
  className="text-black font-bold text-[8rem]"
  style={{
    animation: "spin 3s linear infinite",
  }}
>
  *
</p>
                </div>

                {/* Row 3 - Stacked Photo Pile before "Story" */}
                <div className="flex items-center gap-8 mt-6">
                    <div className="relative w-[220px] h-[220px] photo-stack group">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`stack-${index}`}
                                className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out stack-${index}`}
                            />
                        ))}
                    </div>
                    <h1 className="font-[500] text-[8rem]">Story</h1>
<p
  className="text-[#ff5623] font-bold text-[8rem]"
  style={{
    animation: "spin 3s linear infinite",
  }}
>
  *
</p>

                </div>
            </div>
            <div className="flex flex-col gap-3 items-center mt-10">
                <p className="rotate-90 mb-10">FOLLOW US</p>
                <ArrowDown/>
                <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-instagram"></i></div>
                <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-facebook"></i></div>
                <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-whatsapp"></i></div>
                <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-linkedin"></i></div>
            </div>
</div>
            <div className="ms-auto w-1/2 absolute -bottom-50 right-0">
                <p className="text-lg text-gray-700">
                    <span className="text-[#ff5623]">(*)</span>We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team|
                    Explore our ecosystem 

                </p>
                
            </div>
            <HomeAbout/>
        </div>
    );
}

export default HeroSection;
