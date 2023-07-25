import { Link } from 'react-router-dom';
const CourseCard = (Props) => {
    const data = Props.singleData;
    return (
        <>
            <div className="cmb">
                <div className="p-frame-4">
                    <div className="p-frame-4">
                        <div className="p-frame-3">
                            <div className="p-frame-2">
                                <div className="p-frame-1" >
                                    <img className='w-[500px] min-h-[320px] max-h-[320px] absolute coure-img' src={data.image} alt="header image  " />
                                    {/* writting dada section below */}
                                    <div className=' max-w-[500px] min-h-[320px] max-h-[320px] flex items-center inset-0 CourseCard'>
                                        <div className=' text-black  p-3 courseCardText'>
                                            <h2 className='mb-5 text-[#6A515E] text-xl'>{data.title}</h2>
                                            <p className='text-sm text-[#585E71] mb-3'>{data.data}</p>
                                            <Link to='https://github.com/alice3217/Course-Projects' className='border border-[#585E71] py-1 px-3 text-sm text-[#585E71] my-3'>Course Projects</Link>
                                            <p className='text-sm text-[#6b6d73] mt-3'>Languages:{data.language}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};


export default CourseCard;

