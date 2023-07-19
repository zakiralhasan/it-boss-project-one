
import Header from '../../components/header/Header';

import { BsMouse } from 'react-icons/bs';
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;