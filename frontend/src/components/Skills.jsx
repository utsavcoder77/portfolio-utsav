
function Skills() {
    return (
        <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl flex flex-col gap-24">
            <h1 className="inline-block bg-gradient-to-r from-cyan-400 via-orange-800 to-green-500 bg-clip-text text-5xl text-transparent">My Skills</h1>
            <div>
                <div className="grid grid-rows-2 grid-cols-3 gap-24">
                    <i className="fa-brands fa-html5 text-7xl"></i>
                    <i className="fa-brands fa-css3-alt text-7xl"></i>
                    <i className="fa-brands fa-js text-7xl"></i>
                </div>
                <div className="grid grid-rows-2 grid-cols-3 gap-24">
                    <i className="fa-brands fa-react text-7xl"></i>
                    <i className="fa-brands fa-node text-7xl"></i>
                    <i className="fa-brands fa-github text-7xl"></i>
                </div>
            </div>
        </div >
    )
}

export default Skills;