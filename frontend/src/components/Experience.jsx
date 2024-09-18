import { EXPERIENCES } from "../constants";

function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl  flex flex-col gap-14">
            <h1 className="inline-block bg-gradient-to-r from-sky-400 via-orange-800 to-cyan-500 bg-clip-text text-5xl text-transparent">Experience</h1>
            <p>{EXPERIENCES}</p>
        </div>
    )
}

export default Experience;