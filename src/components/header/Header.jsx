import Typewriter from 'typewriter-effect';
import headerImg from '../../assets/header-image.png'

const Header = () => {
    return (
        <>
            <div id="header-section">
                <div className="header-container p-1 my-10">
                    <div className="header-section-inner flex gap-16 justify-center">
                        <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[300px] rounded-sm hidden xl:block">
                            <div className='border-[1rem] border-[#DDDDCC]'>
                                <img className='' src={headerImg} alt="header image" />
                            </div>
                        </div>
                        {/* writting data section start below */}
                        <div className="header-right flex flex-col justify-end my-6">
                            <div className='flex mb-6'>
                                <h2 className='text-6xl'> Hello World, I`m Ali B.</h2>
                                <div className='text-6xl '>
                                    <Typewriter />
                                </div>
                            </div>

                            <p className='text-4xl font-bold'>I`m a programmer</p>
                            <p className='text-4xl font-bold'> looking for a back-end internship. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;