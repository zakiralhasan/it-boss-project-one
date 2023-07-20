import Navbar from "../components/navbar/Navbar";
import Typewriter from 'typewriter-effect';

const OrgInternet = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='bg-black '>
                    <div className=" text-white text-6xl pt-10 mb-16 text-center">
                        <Typewriter
                            options={{
                                strings: ['Org Intranet SharePoint'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className=" flex justify-center">
                        <div className="bg-white w-11/12 text-left p-7 rounded-[30px] mb-10">
                            <div className="flex flex-wrap justify-center text-white">
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">SharePoint</h3>
                                <h3 className="bg-[#1ABFBC] text-[20px] m-[8px] p-[10px] rounded-3xl">MS365 Business Admin</h3>
                                <h3 className="bg-[#720071] text-[20px] m-[8px] p-[10px] rounded-3xl">Project Charter</h3>
                                <h3 className="bg-[#EFC705] text-[20px] m-[8px] p-[10px] rounded-3xl">Figma</h3>
                                <h3 className="bg-[#FF4000] text-[20px] m-[8px] p-[10px] rounded-3xl">Teams</h3>
                            </div>
                            <div className="">
                                <h2 className="font-russo text-3xl my-5">NVOLVE SUMMER 2022 INTERN</h2>
                                <p className="text-4">This past summer, I was an intern at Nvolve Org, a 501(c)(3) non-profit organization dedicated to increasing the participation of women in technology, engineering, life sciences, and health careers by overcoming gender and socioeconomic barriers. I attended a weekly meeting with my supervisor to give reports regarding website updates, traffic analytics, and SharePoint Intranet project updates.</p>
                                <h2 className="font-russo text-3xl my-5">WEBSITE DEVELOPMENT PROCESS</h2>
                                <p className="text-4">The organization wanted to update some of its website pages and change its overall aesthetic. I met with my supervisor and presented some mockups I created in Figma. Once approved, I created the graphics with Procreate and Adobe Illustrator. Finally, I made the changes and supervised the website traffic analytics. After the change, we observed that in 1 month, the website`s visits increased by 200%, and the bounce rate dropped from 71% to 45%.</p>
                                <h2 className="font-russo text-3xl my-5">SHARE POINT DEVELOPMENT PROCESS</h2>
                                <p className="text-4">Nvolve Org needs to share a lot of information with different organization members. So they tasked me with creating a SharePoint Intranet to make this process of spreading news easier. I first investigated with was the best way to create it and what information I was going to need. Afterward, my supervisor and organization founder meet with me to create a requirements document and project charter. With that information, I made a mockup from approval. Finally, I started SharePoint through MS Admin Portal and had a testing week.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrgInternet;