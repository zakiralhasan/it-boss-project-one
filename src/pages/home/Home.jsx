
import Header from '../../components/header/Header';

import { BsMouse } from 'react-icons/bs';
import Languages from '../../components/languages/Languages';
import Projects from '../../components/projects/Projects';
import Courses from '../../components/courses/Courses';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
        <>
            <div id='home'>
                <Navbar />
                <div className='home-container'>
                    <div className='home-page-inner'>
                        <Header></Header>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <p>SCROLL DOWN</p>
                            <BsMouse className='text-6xl' />
                        </div>
                        <Languages></Languages>
                        <Projects></Projects>
                        <Courses></Courses>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;