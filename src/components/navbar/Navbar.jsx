import './Navbar.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [mobileManue, setMobileManue] = useState(false)
    const [mobileManueClick, setMobileManueClick] = useState(true)

    const manuBar = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/'>About Me</Link>
        </li>
        <li>
            <Link to='/'>Projects</Link>
        </li>
        <li>
            <Link to='/'>Courses</Link>
        </li>
        <li>
            <Link to='/'>Contacts</Link>
        </li>
    </>
    const manuBarForMobile = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/'>About Me</Link>
        </li>
        <li>
            <Link to='/'>Projects</Link>
        </li>
        <li>
            <Link to='/'>Courses</Link>
        </li>
        <li>
            <Link to='/'>Contacts</Link>
        </li>
    </>
    // Function for dark mode conrol 
    const toggleDarkMode = () => {
        let htmlClasses = document.querySelector("html").classList;
        if (localStorage.theme === "dark") {
            htmlClasses.remove("dark");
            localStorage.removeItem("theme");
        } else {
            htmlClasses.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };
    useEffect(() => {
        if (localStorage.theme === "dark") {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }, [])
    return (
        <>
            <div id='nav-section'>
                <div className='nav-container relative dark:bg-[#292929] dark:text-white'>
                    <div className='nav-inner flex justify-between items-center mt-3 text-base mx-10'>
                        <a href="/">
                            <img src={logo} alt="logo" className='logo w-8' />
                        </a>
                        {/* Navbar items section start  */}
                        <div className='flex justify-center items-center gap-5'>
                            <div className='flex gap-4 my-4 items-center '>
                                {!mobileManue ?
                                    <div className=' hidden xl:block'>
                                        <div className='flex gap-4 my-4'>
                                            {manuBar}
                                        </div>
                                    </div> :
                                    <div className='manuBarForMobile'>
                                        {
                                            manuBarForMobile
                                        }
                                    </div>
                                }
                                {/* Mobile manue bar controller  */}
                                {mobileManueClick ?
                                    <AiOutlineMenu className='block xl:hidden cursor-pointer' onClick={() => { setMobileManue(!mobileManue); setMobileManueClick(!mobileManueClick) }} /> :
                                    <BiMenuAltRight className='block xl:hidden cursor-pointer' onClick={() => { setMobileManue(!mobileManue); setMobileManueClick(!mobileManueClick) }} />
                                }
                            </div>
                            {/* Dark icon controller  */}
                            <div>
                                {!darkMode ?
                                    <MdLightMode onClick={() => { toggleDarkMode(); setDarkMode(true) }} />
                                    :
                                    <MdDarkMode onClick={() => { toggleDarkMode(); setDarkMode(false) }} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;