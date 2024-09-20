import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic from "../assets/images/utsavProfile.jpg";


function Hero() {
    return (
        <>
            <div>
                <h1 className="inline-block bg-gradient-to-r from-cyan-600 via-orange-800 to-indigo-400 bg-clip-text text-5xl text-transparent">Utsav Baral: Full-stack developer</h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-20 mt-20 border-b border-neutral-900 pb-4">
                <div className="flex flex-col gap-10 basis-2/3">
                   
                    <div className="basis-3/4">
                        <p className="leading-8 font-sans text-lg">{HERO_CONTENT}</p>
                    </div>
                </div>
                <figure className="self-center md:self-start">
                    <img className="md:w-[250px] mix-blend-screen" src={ProfilePic} alt="profile" />
                </figure>
            </div>
        </>
    )
}

export default Hero;
