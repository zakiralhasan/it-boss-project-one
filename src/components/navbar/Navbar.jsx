
import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.png'

const Navbar = () => {

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
    return (
        <>
            <div id='nav-section'>
                <div className='nav-container'>
                    <div className='nav-inner flex justify-between items-center mt-3 text-base p-2'>
                        <a href="/">
                            <img src={logo} alt="logo" className='logo w-8' />
                        </a>
                        <div className='flex gap-4 my-4'>
                            {manuBar}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;