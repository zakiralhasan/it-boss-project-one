import Typewriter from 'typewriter-effect';
import Navbar from '../components/navbar/Navbar';

const Websites = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='bg-black w-screen h-screen text-white text-6xl flex justify-center items-center	'>
                    <Typewriter
                        options={{
                            strings: ['Websites'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Websites;