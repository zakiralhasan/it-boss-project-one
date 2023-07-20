import Navbar from "../components/navbar/Navbar";
import Typewriter from 'typewriter-effect';
import mobileImg from '../assets/mobile-image.png'
const MentelHealth = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='bg-black '>
                    <div className=" text-white text-6xl pt-10 mb-16 text-center">
                        <Typewriter
                            options={{
                                strings: ['Mental Health App'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className=" flex justify-center">
                        <div className="bg-white w-11/12 text-left p-7 rounded-[30px] mb-10">
                            <div className="flex flex-wrap justify-center text-white">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">FlutterFlow</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">Firebase</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Database Design</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Wireframes</h3>
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">BigQuery</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">NoSQL</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Google Analytics</h3>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <h2 className="font-russo text-3xl my-5">UX/UI TEAM LEAD</h2>
                                    <p className="text-4">I am the lead of the UX/UI Team in this project. In this role, I was in charge of investigating what tools to use, app development, and database design. I attended weekly meetings for six months in which I presented progress reports to other teams and reported to our supervisors. In addition, we had team weekly meetings in which we discussed and worked together.</p>
                                    <h2 className="font-russo text-3xl my-5">DEVELOPMENT PROCESS</h2>
                                    <p className="text-4">The application MoodZen was developed in FlutterFlow, but before doing so, we created a mockup through Figma so that it could get approved by the other teams. Once set, we used Dart code plug-in functions to perform basic calculations needed for analytics. Afterward, I made a NoSQL database to store user information and other important data. All this information is stored in the Firebase Cloud, linked to BigQuery and Google Analytics to create data visualizations for research purposes.</p>
                                    <h2 className="font-russo text-3xl my-5">DEMOS</h2>
                                    <p className="text-4">This application will be available to the public in October 2022 on Apple AppStore and Google PlayStore. Unfortunately, we cannot share the link to the prototype at this time, but feel free to contact me for demonstrations.</p>
                                </div>
                                <img className="w-[250px] h-[440px] p-8 hidden xl:block" src={mobileImg} alt="mobile app image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MentelHealth;