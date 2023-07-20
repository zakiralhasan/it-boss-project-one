import Typewriter from 'typewriter-effect';
import CourseCard from './CourseCard';

import api from '../../../public/API.json'
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
                        <div className=' grid xl:grid-cols-2 gap-4 justify-items-center p-12'>
                            {
                                api.map(singleData =>
                                    <CourseCard
                                        key={singleData.id}
                                        singleData={singleData}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Courses;