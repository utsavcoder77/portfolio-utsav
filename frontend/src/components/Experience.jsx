import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";


function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl mt-32 flex flex-col gap-14">
            <motion.h1
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={
                    {
                        duration: 3,
                        delay: 3
                    }
                }

                className="inline-block bg-gradient-to-r from-sky-400 via-orange-800 to-cyan-500 bg-clip-text text-5xl text-transparent">Experience</motion.h1>
            <motion.p
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={
                    {
                        duration: 4,
                        delay: 4
                    }
                }

            >{EXPERIENCES}</motion.p>
        </div>
    )
}

export default Experience;