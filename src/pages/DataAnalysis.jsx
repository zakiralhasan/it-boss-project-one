import Navbar from "../components/navbar/Navbar";
import Typewriter from 'typewriter-effect';

const DataAnalysis = () => {
    return (
        <div className="dark:bg-[#292929] dark:text-white">
            <Navbar />
            <div className="bg-black pb-10 justify-center items-center">
                <div className='  text-white text-6xl pt-12 mb-10'>
                    <Typewriter
                        options={{
                            strings: ['Data Analysis'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                {/* Box section start  */}
                < div className="flex xl:flex-row flex-col justify-center items-center">
                    <div className="flex justify-center items-center bg-white w-[550px] h-[280px] rounded-[50px] m-10 dark:bg-[#dadada]">
                        <div >
                            <h2 className="text-[40px] mb-5 dark:text-black">COVID FLIGHT <br /> PATTERNS</h2>
                            <div className="flex gap-5 justify-center">
                                <button className="bg-black text-white p-5 rounded-[20px] text-2xl">Visualization</button>
                                <button className="bg-black text-white p-5 rounded-[20px] text-2xl">Write Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-white w-[550px] h-[280px] rounded-[50px] m-10 dark:bg-[#dadada]">
                        <div >
                            <h2 className="text-[40px] mb-5 dark:text-black">MD STATE COLLEGES <br /> DEMOGRAPHICS</h2>
                            <div className="flex gap-5 justify-center">
                                <button className="bg-black text-white p-5 rounded-[20px] text-2xl">Documentation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysis;