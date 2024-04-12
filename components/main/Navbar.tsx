import { Socials } from "@/constants";
import Image from "next/image";

export default function Navbar(){
    return (
        <div className="w-full h-[68px] fixed  shadow-lg shadow-[#2A0E61]/60 bg-[#03001417] backdrop-blur-md z-[100] px-10">
            <div className=" w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className=" h-auto w-auto flex flex-row items-center ">
                    <Image
                    src='/myAvatar.svg'
                    alt="logo"
                    width={65}
                    height={65}
                    className=" border borser-[1px] border-[#2A0E61] cursor-pointer hover:animate-slowspin rounded-full "
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">Aryan Sharma</span>
                </a>
                <div className=" min-w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className=" min-w-[500px] flex items-center justify-between border border-[#7042f861] bg-[#0300145E] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-400 w-full h-auto">
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#get-in-touch">Contact</a>
                    </div>
                    <div className=" flex flex-row gap-5 ">
                        {Socials.map((social)=>(
                            <a target="_blank" href={social.link} key={social.name} className=" w-20">
                            <Image src={social.src} alt={social.name}  width={24} height={24} className="cursor-pointer"/>
                            </a>
                        ))}
                    </div>
                </div>            </div>
        </div>
    )
}
