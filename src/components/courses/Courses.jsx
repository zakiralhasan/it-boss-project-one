import Typewriter from 'typewriter-effect';
import img1 from '../../assets/courses-img-one.png'
import img2 from '../../assets/courses-img-two.png'
import img3 from '../../assets/courses-img-three.png'
import img4 from '../../assets/courses-img-four.png'
import img5 from '../../assets/courses-img-five.png'
import img6 from '../../assets/courses-img-six.png'
import img7 from '../../assets/courses-img-seven.png'
import img8 from '../../assets/courses-img-eight.png'

const Courses = () => {
    return (
        <>
            <div id="courses-section">
                <div className="courses-container">
                    <div className="courses-inner bg-black text-white py-10">
                        <div className='flex mb-3 justify-center content-center'>
                            <h2 className='text-6xl'> Courses</h2>
                            <div className='text-6xl text-[#8d9e9e]'>
                                <Typewriter />
                            </div>
                        </div>
                        <h2 className='text-2xl'>hover each image!</h2>
                        {/* Course section images container start */}
                        <div className=' grid grid-cols-2 gap-4 justify-items-center p-12'>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img1} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img2} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img3} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img4} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img5} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img6} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img7} alt="header image" />
                                </div>
                            </div>
                            <div className="header-left border-[1rem] border-[#DDDDDD] max-w-[600px] rounded-sm">
                                <div className='border-[1rem] border-[#959586]'>
                                    <img className='' src={img8} alt="header image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Courses;