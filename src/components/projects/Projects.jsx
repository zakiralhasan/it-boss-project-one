import './Projects.css';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Projects = () => {
    return (
        <>
            <div id="project-section">
                <div className="project-container dark:bg-[#292929] dark:text-white">
                    <div className="project-inner ">
                        <div className='flex mb-6 py-10 justify-center content-center'>
                            <h2 className='text-6xl'> Projects</h2>
                            <div className='text-6xl text-[#720071]'>
                                <Typewriter />
                            </div>
                        </div>
                        {/* Project items container start  */}
                        <div className=' grid xl:grid-cols-2 gap-20 justify-items-center p-12'>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/course-projecs'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Course Projects</p>
                                </Link>
                            </div>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/data-analysis'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Data Analysis</p>
                                </Link>
                            </div>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/webises'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Websites</p>
                                </Link>
                            </div>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/mentel-health'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Mental Health App</p>
                                </Link>
                            </div>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/orgInternet'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Org Internet</p>
                                </Link>
                            </div>
                            <div className='w-[375px] h-[90px] projects-item-border-out'>
                                <Link to='/others'>
                                    <p className='projects-item-border-in text-2xl px-12 py-5'>Other Projects</p>
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