import Image from "next/image"
import { FaGithub } from "react-icons/fa";

interface Props{
    src: string, 
    title: string, 
    description: string,
    link: string,
    githubLink: string
}
function ProjectCard({src, title, description, link, githubLink}: Props) {
  return (
  

    
      <div className="z-[20] relative overflow-hidden rounded-2xl shadow-lg border border-[#2a0e61] ">
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className=" w-full object-contain"
        />
        <div className=" relative p-4">
            <div className=" flex items-center justify-between">
            <a target="_blank" href={link}>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
            </a>
            <a target="_blank" href={githubLink} className="text-white">
            <FaGithub/>
            </a>
            </div>
                        <p className="mt-2 text-gray-300 ">{description}</p>
            
        </div>
    </div>
  
  

  )
}

export default ProjectCard

