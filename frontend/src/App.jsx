import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

    return (
        <>
            <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen bg-gradient-to-b from-slate-800 to-slate-900'>

                <div className="flex justify-center">
                    <div className="w-full max-w-[1200px] p-4">
                        <Navbar />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4 mt-10">
                        <Hero />
                    </div>

                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4">

                        <About />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4 mt-20">

                        <Experience />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4 mt-20">

                        <Projects />
                    </div>
                </div>

                <div className='flex justify-center p-4 mt-20'>
                    <div className="w-full  max-w-[1200px] ">
                        <Skills />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] mt-20 p-4">
                        <Contact />
                    </div>
                </div>

                <div className='flex justify-center bg-slate-950 mt-20'>
                    <div className="w-full  max-w-[1200px] p-4">

                        <Footer />
                    </div>
                </div>
            </div >

        </>
    )
}

export default App
