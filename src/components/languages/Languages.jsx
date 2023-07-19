import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Languages = () => {

    return (
        <>
            <div id="languages-section">
                <div className="languages-container">
                    <div className="languages-inner bg-black text-white mt-4">
                        <h2 className='text-6xl text-center py-10'>Languages</h2>
                        <hr />
                        <div className='flex py-10 gap-10 justify-center'>
                            <CircularProgressbarWithChildren
                                className=' w-48 '
                                value={85}
                                styles={buildStyles({ pathColor: 'white', trailColor: 'black', rotation: 1 })}
                            >
                                <p className='text-white'> +5 years </p>
                                <p className='text-white'> HTML/CSS/JS </p>
                            </CircularProgressbarWithChildren>
                            <CircularProgressbarWithChildren
                                className=' w-48 '
                                value={70}
                                styles={buildStyles({ pathColor: 'white', trailColor: 'black', rotation: 1, })}
                            >
                                <p className='text-white'> +4 years </p>
                                <p className='text-white'> C </p>
                            </CircularProgressbarWithChildren>
                            <CircularProgressbarWithChildren
                                className=' w-48 '
                                value={50}
                                styles={buildStyles({ pathColor: 'white', trailColor: 'black', rotation: 1 })}
                            >
                                <p className='text-white'> +3 years </p>
                                <p className='text-white'> C++/Java </p>
                            </CircularProgressbarWithChildren>
                            <CircularProgressbarWithChildren
                                className=' w-48 '
                                value={35}
                                styles={buildStyles({ pathColor: 'white', trailColor: 'black', rotation: 1 })}
                            >
                                <p className='text-white'> +1 years </p>
                                <p className='text-white'> Tableau/R </p>
                            </CircularProgressbarWithChildren>
                            <CircularProgressbarWithChildren
                                className=' w-48 '
                                value={30}
                                styles={buildStyles({ pathColor: 'white', trailColor: 'black', rotation: 1 })}
                            >
                                <p className='text-white'> 1 years </p>
                                <p className='text-white'> Ruby/Python </p>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Languages;