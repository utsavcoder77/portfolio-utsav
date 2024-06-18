import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic from "../assets/utsavProfile.jpeg"

function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 w-full lg:mb-35">
            <div className="flex w-full max-w-screen-2xl flex-wrap mx-10">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Utsav Baral</h1>
                        <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
                        <p className="m-2 leading-10 max-w-l py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="w-[400px] rounded-3xl" src={ProfilePic} alt="Utsav Baral" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
