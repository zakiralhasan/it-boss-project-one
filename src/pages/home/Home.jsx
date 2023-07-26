
import Header from '../../components/header/Header';

import { BsMouse } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Languages from '../../components/languages/Languages';
import Projects from '../../components/projects/Projects';
import Courses from '../../components/courses/Courses';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
        <>
            <div id='home' className='border-2 border-red-600 relative'>
                <Navbar />
                <div className='home-container '>
                    <div className='home-page-inner'>
                        <Header></Header>
                        <div className='flex flex-col items-center justify-center gap-3 py-5 dark:bg-[#292929] dark:text-white'>
                            <p>SCROLL DOWN</p>
                            <BsMouse className='text-6xl' />
                        </div>
                        <Languages></Languages>
                        <Projects></Projects>
                        <Courses></Courses>
                    </div>
                </div>
                <Footer />
                <a href='#home'>
                    <AiOutlineArrowUp className='bg-[#1BBFBC] text-white text-5xl p-2 fixed right-[2%] bottom-[16%] rounded-full cursor-pointer' />
                </a>
            </div>
        </>
    );
};

export default Home;