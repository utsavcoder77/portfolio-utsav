
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

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
                    <div className="w-full  max-w-[1200px] p-4">
                        <Hero />
                    </div>

                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4">

                        <About />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full  max-w-[1200px] p-4">

                        <Experience />
                    </div>
                </div>
            </div >

        </>
    )
}

export default App
