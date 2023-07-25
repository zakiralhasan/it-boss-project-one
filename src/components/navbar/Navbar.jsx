import './Navbar.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileMenuClick, setMobileMenuClick] = useState(true)

    const menuBar = <>
        <div className='menuBarForDesktop'>
            <Link to='/'>Home</Link>
        </div>
        <div className='menuBarForDesktop'>
            <a href='#header-section'>About Me</a>
        </div>
        <div className='menuBarForDesktop'>
            <a href='#project-section'>Projects</a>
        </div>
        <div className='menuBarForDesktop'>
            <a href='#courses-section'>Courses</a>
        </div>
        <div className='menuBarForDesktop'>
            <a href='#footer-section'>Contacts</a>
        </div>
    </>
    const menuBarForMobile = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='header-section'>About Me</Link>
        </li>
        <li>
            <Link to='project-section'>Projects</Link>
        </li>
        <li>
            <Link to='courses-section'>Courses</Link>
        </li>
        <li>
            <Link to='footer-section'>Contacts</Link>
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
                <div className='nav-container relative dark:bg-[#515151] dark:text-white'>
                    <div className='nav-inner flex justify-between items-center text-base mx-10'>
                        <a href="/">
                            <img src={logo} alt="logo" className='logo w-8' />
                        </a>
                        {/* Navbar items section start  */}
                        <div className='flex justify-center items-center gap-5'>
                            <div className='flex gap-4 my-4 items-center '>
                                {!mobileMenu ?
                                    <div className=' hidden xl:block'>
                                        <div className='flex gap-4 my-4'>
                                            {menuBar}
                                        </div>
                                    </div> :
                                    <div className='menuBarForMobile'>
                                        {
                                            menuBarForMobile
                                        }
                                    </div>
                                }
                                {/* Mobile manue bar controller  */}
                                {mobileMenuClick ?
                                    <AiOutlineMenu className='block xl:hidden cursor-pointer' onClick={() => { setMobileMenu(!mobileMenu); setMobileMenuClick(!mobileMenuClick) }} /> :
                                    <BiMenuAltRight className='block xl:hidden cursor-pointer' onClick={() => { setMobileMenu(!mobileMenu); setMobileMenuClick(!mobileMenuClick) }} />
                                }
                            </div>
                            {/* Dark icon controller  */}
                            <div>
                                {darkMode ?
                                    <MdLightMode className='cursor-pointer' onClick={() => { toggleDarkMode(); setDarkMode(false) }} />
                                    :
                                    <MdDarkMode className='cursor-pointer' onClick={() => { toggleDarkMode(); setDarkMode(true) }} />
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