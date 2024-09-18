import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import project6 from '../assets/projects/project6.png';
import project7 from '../assets/projects/project7.png';

function Projects() {

    const PROJECTS = [
        {
            id: 1,
            projectName: "Photography website",
            img: project1,
            alt: "photography website",
            description: "I am currently developing 'Capture Amazing Memories' a dynamic website designed to immortalize special moments through innovative multimedia tools. This project merges my expertise in frontend design with backend functionality to deliver a user-friendly platform. From photo galleries to interactive features, it aims to redefine how users cherish and share their most cherished memories online."
        },
        {
            id: 2,
            projectName: "Split-cost App",
            img: project2,
            alt: "split-cost app",
            description: "I have created 'Split-cost app' using HTML, CSS and pure Javascript which helps to split groceries bill equally among roommates. There is feature of adding description and settle amount when the bill is settled. Users can be added and removed as per requirement on this web app."
        },
        {
            id: 3,
            projectName: "Calculator App",
            img: project3,
            alt: "calculator app",
            description: "I have created basic calculator app using HTML, CSS and javascript which can do basic mathematics calculation. I have created this project when I was beginner in javascript."
        },
        {
            id: 4,
            projectName: "To DO App",
            img: project4,
            alt: "To do app",
            description: "I have created To  Do app using HTML, CSS and javascript where user can write notes and daily routine und use it for future."
        },
        {
            id: 5,
            projectName: "Tic Toc Toe game",
            img: project5,
            alt: "Tic toc toe game",
            description: "I have created basic Tic Toc Toe game using HTML, CSS and javascript where user can play Tic toc toe game."
        },
        {
            id: 6,
            projectName: "Stock-Management App",
            img: project6,
            alt: "stock management app",
            description: "I have created Stock-Management app using React.js where user can see the available products and search for products."
        },
        {
            id: 7,
            projectName: "E-commerce website",
            img: project7,
            alt: "E-commerce website",
            description: "I have been working on e-commerce website using React.js and express.js. I hav e created register page, login page and dashboard. I have validate the pages and it is working fine."
        },
    ]


    return (
        <div className="border-b border-neutral-900 pb-4  w-full max-w-screen-xl flex flex-col gap-14">
            <h1 className="inline-block bg-gradient-to-r from-cyan-400 via-orange-800 to-green-500 bg-clip-text text-5xl text-transparent">Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 sm:grid-cols-2'>
                {
                    PROJECTS.map(({ id, projectName, img, description, alt }) => (
                        <div key={id} className='flex flex-col gap-10 flex-wrap bg-black p-4 rounded-2xl'>

                            <h2 className="text-base text-sky-600 font-bold">{projectName}</h2>

                            <div className='flex flex-col gap-14'>
                                <img className="h-[300px] border-2 border-slate-50 rounded-lg" src={img} alt={alt} />
                                <p className=''>{description}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Projects