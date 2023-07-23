

const CourseCard = (Props) => {
    const data = Props.singleData;
    return (
        <>

            <div>
                <div className="header-left border-[1rem] border-[#DDDDDD]  rounded-sm">
                    <div className='border-[1rem] border-[#6a6a68] relative'>
                        <img className='w-[500px] min-h-[320px] max-h-[320px] absolute hover:fixed' src={data.image} alt="header image  " />
                        {/* writting dada section below */}
                        <div className=' max-w-[500px] min-h-[320px] max-h-[320px]  bg-white flex items-center inset-0 dark:bg-[#292929]'>
                            <div className=' text-black  p-3'>
                                <h2 className='mb-5 text-[#6A515E] text-xl dark:text-white'>{data.title}</h2>
                                <p className='text-sm text-[#585E71] dark:text-white'>{data.data}</p>
                                <button className='border border-[#585E71] py-1 px-3 text-sm text-[#585E71] my-3 dark:text-white'>Course Projects</button>
                                <p className='text-sm text-[#585E71] dark:text-white'>Languages:{data.language}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;