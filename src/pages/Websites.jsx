import Typewriter from 'typewriter-effect';
import Navbar from '../components/navbar/Navbar';
import { AiOutlineLink } from 'react-icons/ai'
import img1 from '../assets/web-page-image-one.png'
import img2 from '../assets/web-page-image-two.png'
import img3 from '../assets/web-page-image-three.png'
import img4 from '../assets/web-page-image-four.png'
import img5 from '../assets/web-page-image-five.png'

const Websites = () => {
    return (
        <>
            <div className='dark:bg-[#292929] dark:text-white'>
                <Navbar />
                <div>
                    <div className='bg-black text-white text-6xl text-center my-10 py-32'>
                        <Typewriter
                            options={{
                                strings: ['Course Projects'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className='flex xl:flex-row-reverse flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <img src={img1} alt='web page image' className=' border-4 border-black rounded-xl' />
                        </div>
                        <div className=' basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Personal <br /> Portfolio</h2>
                            <div className="flex flex-wrap justify-start text-white">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Angular</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Typscript</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">HTML/css/Javascript</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Routing</h3>
                            </div>
                            <div className='flex justify-start items-center gap-5 mt-5'>
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-black flex xl:flex-row flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <img src={img2} alt='web page image' className=' border-4 border-black rounded-xl' />
                        </div>
                        <div className='text-white basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Construction Co. <br />Website</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Figma</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Wix</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">UI/UX</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Adobe Illustrator</h3>
                            </div>
                            <div className='flex justify-start items-center gap-5 mt-5'>
                                <AiOutlineLink className='p-3 text-6xl border-2 border-white rounded-full w-16 h-16' />
                                <AiOutlineLink className='p-3 text-6xl border-2 border-white rounded-full w-16 h-16' />
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row-reverse flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <img src={img3} alt='web page image' className=' border-4 border-black rounded-xl' />
                        </div>
                        <div className=' basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">None Profit <br />Website</h2>
                            <div className="flex flex-wrap justify-start text-white">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Analytics</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">SquareSpace</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Webmaster</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Mailchimp</h3>
                            </div>
                            <div className='flex justify-start items-center gap-5 mt-5'>
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-black flex xl:flex-row flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <img src={img4} alt='web page image' className=' border-4 border-black rounded-xl' />
                        </div>
                        <div className='text-white basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Professional <br />Network</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Mock-Up</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Hackathon</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">HTML/CSS</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Chat Box</h3>
                            </div>
                            <div className='flex justify-start items-center gap-5 mt-5'>
                                <AiOutlineLink className='p-3 text-6xl border-2 border-white rounded-full w-16 h-16' />
                                <AiOutlineLink className='p-3 text-6xl border-2 border-white rounded-full w-16 h-16' />
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row-reverse flex-col-reverse gap-10 items-center xl:py-20 px-16'>
                        <div className='flex justify-center basis-1/2 p-5'>
                            <img src={img5} alt='web page image' className=' border-4 border-black rounded-xl' />
                        </div>
                        <div className=' basis-1/2'>
                            <h2 className="font-russo text-5xl my-5 text-left">Educational <br /> Website</h2>
                            <div className="flex flex-wrap justify-start">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">HTML/CSS</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Bootstrap</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Pitch Competition</h3>
                            </div>
                            <div className='flex justify-start items-center gap-5 mt-5'>
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                                <AiOutlineLink className='p-3 text-6xl border-2 border-black rounded-full w-16 h-16' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Websites;