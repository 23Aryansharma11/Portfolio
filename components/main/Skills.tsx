import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "@/constants";
import { IoIosCodeDownload } from "react-icons/io";
import SkillText from '../sub/SkillText'
import SkillDataProvider from '../sub/SkillDataProvider'
export default function Page(){
    return (
        <section className="flex flex-col items-center justify-center gap-3  relative overflow-hidden  z-[20]" id="skills "
        style={{transform: "scale(0.9)"}}
        >
            
            <SkillText/>

            <div className=" flex justify-center items-center z-[30] cursor-pointer">
            <a href="/myResume.pdf" download={true}>
                    <div className='Welcome-box px-[15px] py-[4px] z-20 border border-[#7042f88b] opacity-[0.6] flex justify-center items-center'>
                                <h1 className='Welcome-text text-[20px]'>Download Resume</h1>
                                <IoIosCodeDownload className=" text-purple-500 text-[40px]"/>
                    </div>
            </a>
            </div>
            <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Skill_data.map((image, index)=>(
                    <SkillDataProvider src={image.Image } key={index} width={image.width} height={image.height} index={index}/>
                ))}
            </div>
            <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Frontend_skill.map((image, index)=>(
                    <SkillDataProvider src={image.Image } key={index} width={image.width} height={image.height} index={index}/>
                ))}
            </div>
            <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Backend_skill.map((image, index)=>(
                    <SkillDataProvider src={image.Image } key={index} width={image.width} height={image.height} index={index}/>
                ))}
            </div>
            <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Other_skill.map((image, index)=>(
                    <SkillDataProvider src={image.Image } key={index} width={image.width} height={image.height} index={index}/>
                ))}
            </div>
            <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Full_stack.map((image, index)=>(
                    <SkillDataProvider src={image.Image } key={index} width={image.width} height={image.height} index={index}/>
                ))}
            </div>
            
                <div className="w-full h-full absolute">
                    
                    <div className=" w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                        <video src="/cards-video" className="w-full h-auto" preload="false" playsInline loop muted autoPlay/>
                    </div>
                </div>
        </section>
    )
}
