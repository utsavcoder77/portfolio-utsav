import { ABOUT_TEXT } from "../constants/index";
import picture from "../assets/images/utsav_about.png";

function About() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            <figure className="self-end">
                <img src={picture} className="h-[400px]"></img>
            </figure>
            <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl mt-32 flex flex-col gap-14">
                < h1 className="inline-block bg-gradient-to-r from-cyan-600 via-orange-800 to-indigo-400 bg-clip-text text-5xl text-transparent">About my Skills on full-stack development</h1>
                <p>{ABOUT_TEXT}</p>
            </div>

        </div>
    )
}

export default About;
