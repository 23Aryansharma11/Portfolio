import { Socials } from "@/constants";
import Image from "next/image";

export default function Navbar(){
    return (
        <div className="w-full h-[65px] fixed  shadow-lg shadow-[#2A0E61]/60 bg-[#03001417] backdrop-blur-md z-[100] px-10">
            <div className=" w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className=" h-auto w-auto flex flex-row items-center">
                    <Image
                    src='/NavLogo.png'
                    alt="logo"
                    width={70}
                    height={70}
                    className=" cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">Aryan Sharma</span>
                </a>
                <div className=" w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145E] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-400 w-full h-auto">
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#get-in-touch">Contact</a>
                    </div>
                    <div className=" flex flex-row gap-5 ">
                        {Socials.map((social)=>(
                            <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} className="cursor-pointer"/>

                        ))}
                    </div>
                </div>            </div>
        </div>
    )
}
