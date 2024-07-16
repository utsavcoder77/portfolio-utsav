import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic from "../assets/images/utsavProfile.jpg"

function Hero() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-20">
                <div className="flex flex-col gap-10 basis-2/3">
                    <div className="md:items-start flex flex-col justify-center items-center gap-5">
                        <h1 className="inline-block bg-gradient-to-r from-cyan-600 via-orange-800 to-indigo-400 bg-clip-text text-5xl text-transparent">Utsav Baral</h1>
                        <h2 className="inline-block bg-gradient-to-r from-orange-800  via-cyan-600 to-indigo-400 bg-clip-text text-5xl text-transparent">Full-stack developer</h2>
                    </div>
                    <div className="basis-3/4">
                        <p className="leading-8 font-sans text-lg">{HERO_CONTENT}</p>
                    </div>
                </div>
                <figure className="self-center md:self-start">
                    <img className="md:w-[600px] mix-blend-screen" src={ProfilePic} alt="profile" />
                </figure>
            </div>
        </>
    )
}

export default Hero;
