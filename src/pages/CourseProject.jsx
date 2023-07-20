import Typewriter from 'typewriter-effect';
import Navbar from '../components/navbar/Navbar';
import { FiGithub } from 'react-icons/fi';

const CourseProject = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <div className='text-6xl text-center my-10'>
                        <Typewriter
                            options={{
                                strings: ['Course Projects'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className='bg-black flex xl:flex-row flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <FiGithub className='p-3 text-6xl border-2 border-white text-white rounded-full w-20 h-20' />
                        </div>
                        <div className='text-white basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Object Oriented <br />Programming</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">UML Diagrams</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">C++</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Java</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Visual Studio</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row-reverse flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <FiGithub className='p-3 text-6xl border-2 border-black rounded-full w-20 h-20' />
                        </div>
                        <div className=' basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Computer <br /> Systems</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">C</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Shell</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Linux</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Angular</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black flex xl:flex-row flex-col-reverse gap-10 items-center xl:py-20 px-20'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <FiGithub className='p-3 text-6xl border-2 border-white text-white rounded-full w-20 h-20' />
                        </div>
                        <div className='text-white basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Programming <br />Languages</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Ruby</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Ocaml</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Rust</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">VS Code</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row-reverse flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <FiGithub className='p-3 text-6xl border-2 border-black rounded-full w-20 h-20' />
                        </div>
                        <div className=' basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Applied <br />Probability <br />and Statistics</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">R</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Rstudio</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Git</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Python</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseProject;