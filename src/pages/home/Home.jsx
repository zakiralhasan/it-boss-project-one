
import Header from '../../components/header/Header';

import { BsMouse } from 'react-icons/bs';
import Languages from '../../components/languages/Languages';
const Home = () => {
    return (
        <>
            <div id='home'>
                <div className='home-container'>
                    <div className='home-page-inner'>
                        <Header></Header>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <p>SCROLL DOWN</p>
                            <BsMouse className='text-6xl' />
                        </div>
                        <Languages></Languages>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;