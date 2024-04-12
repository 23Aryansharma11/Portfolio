import { projects } from "@/constants";
import ProjectCard from "../sub/ProjectCard";

export default function Projects(){
    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects">
            <h1 className=" text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className=" h-full w-full flex flex-col md:flex-row gap-10 px-10">
                {projects.map((project)=>(
                    <ProjectCard key={project.title} src={project.src} description={project.Description} title={project.title} link={project.link} githubLink={project.githubLink} />
                ))}
            </div>
        </div>
    )
}
