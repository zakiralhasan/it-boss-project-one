
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';





const Footer = () => {
    return (
        <>
            <div id="footer-section">
                <div className="footer-container">
                    <div className="footer-inner my-8">
                        <h2 className='text-6xl text-center my-8'>Contact Me</h2>
                        <div className='flex gap-x-6 justify-center align-center'>
                            <RiLinkedinLine className=' p-3 text-6xl border-2 border-black rounded-full' />
                            <FiGithub className='p-3 text-6xl border-2 border-black rounded-full' />
                            <AiOutlineMail className='p-3 text-6xl border-2 border-black rounded-full' />
                            <CiTwitter className='p-3 text-6xl border-2 border-black rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;