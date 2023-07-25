
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import './footer.css';




const Footer = () => {
    return (
        <>
            <div id="footer-section">
                <div className="footer-container dark:bg-[#292929] dark:text-white py-5">
                    <div className="footer-inner my-8">
                        <div className='flex my-8 justify-center'>
                            <h2 className='text-6xl'> Contact Me</h2>
                            <div className='text-6xl text-[#720071]'>
                                <Typewriter />
                            </div>
                        </div>

                        <div className='flex gap-x-6 justify-center align-center'>
                            <Link to='https://www.linkedin.com/in/ali-bichanga/' className='footer-social-icon-common footer-social-icon-1'>
                                <RiLinkedinLine className=' p-4 text-6xl rounded-full' />
                            </Link>
                            <Link to='https://github.com/alice3217' className='footer-social-icon-common footer-social-icon-2'>
                                <FiGithub className='p-4 text-6xl rounded-full' />
                            </Link>
                            <Link to='https://mail.google.com/' className='footer-social-icon-common footer-social-icon-3'>
                                <AiOutlineMail className='p-4 text-6xl rounded-full' />
                            </Link>
                            <Link to='https://twitter.com/' className='footer-social-icon-common footer-social-icon-4'>
                                <CiTwitter className='p-3 text-6xl rounded-full' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;