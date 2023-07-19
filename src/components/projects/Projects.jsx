import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Projects = () => {
    return (
        <>
            <div id="project-section">
                <div className="project-container">
                    <div className="project-inner ">
                        <div className='flex mb-6 py-10 justify-center content-center'>
                            <h2 className='text-6xl'> Projects</h2>
                            <div className='text-6xl text-[#720071]'>
                                <Typewriter />
                            </div>
                        </div>
                        <div className='project-items grid grid-cols-2 gap-4 justify-items-center p-12'>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[477px]'>
                                <Link >
                                    <p className='border border-black p-7 text-2xl  '>Course Projects</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Projects;