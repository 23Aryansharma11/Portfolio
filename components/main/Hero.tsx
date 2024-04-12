import HeroContent from "../sub/HeroContent";

export default function Page(){
    return (
        <div className=" justify-center items-center relative flex flex-col h-full w-full overflow-hidden">
            
            <video 
            autoPlay
            muted
            loop
            className=" rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
            >
            <source src="/blackhole.webm" type="video/webm"/>
            </video>
              <HeroContent/>
        </div>
    )
}
