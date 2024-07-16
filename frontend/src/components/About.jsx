import { ABOUT_TEXT } from "../constants/index"

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl mt-32 flex flex-col gap-14">
            < h1 className="inline-block bg-gradient-to-r from-cyan-600 via-orange-800 to-indigo-400 bg-clip-text text-5xl text-transparent">About my Skills on full-stack development</h1>
            <p>{ABOUT_TEXT}</p>
        </div>
    )
}

export default About;
