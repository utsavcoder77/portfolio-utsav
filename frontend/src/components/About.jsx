import { ABOUT_TEXT } from "../constants/index";
import picture from "../assets/images/utsav_about.png";

function About() {
    return (
        <>
            < h1 className="inline-block bg-gradient-to-r from-cyan-600 via-orange-800 to-indigo-400 bg-clip-text text-5xl text-transparent mt-20">About my Skills on full-stack development</h1>
            <div className="flex flex-col-reverse md:flex-row gap-10 mt-20">
                <figure className="self-end basis-1/2">
                    <img src={picture} className="h-[250px] brightness-50 rounded-3xl grayscale-0 hover:grayscale transition-all hover:scale-[98%]"></img>
                </figure>
                <div className="basis-1/2">
                    
                    <p>{ABOUT_TEXT}</p>
                </div>

            </div>
        </>
        
    )
}

export default About;
