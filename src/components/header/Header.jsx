import Typewriter from 'typewriter-effect';
import headerImg from '../../assets/header-image.png'
import './header.css'

const Header = () => {
    return (
        <>
            <div id="header-section">
                <div className="header-container p-1 py-10 dark:bg-[#292929] dark:text-white">
                    <div className="header-section-inner flex gap-16 justify-center">
                        <div className="header-left  max-w-[300px] rounded-sm hidden xl:block">
                            <div className="p-frame-4">
                                <div className="p-frame-3">
                                    <div className="p-frame-2">
                                        <div className="p-frame-1">
                                            <img className='' src={headerImg} alt="header image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* writting data section start below */}
                        <div className="header-right flex flex-col justify-end my-6">
                            <div className='flex mb-6'>
                            <div className='text-6xl text-left header-title'>Hello, I`m
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString(' Ali Bichanga.')
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='header-text-animation-main'>
                                <p className='text-4xl font-bold header-a-word'> A</p>
                                <p className='text-4xl font-bold header-animation-text'>
                                    <span>programmer</span>
                                    <span>software engineer</span>
                                    <span>computer science major</span>
                                    <span>data analyst</span>
                                </p>
                                <p className='text-4xl font-bold'> seeking software engineer internship. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
function animationText() {
    const text = document.querySelector(".header-animation-text").children;
    const textlength = text.length;
    let index = 0;

    function startTextAnimation() {
        for (let i = 0; i < textlength; i++) {
            text[i].classList.remove("text-out")
        }
        text[index].classList.add("text-out")
        if (index == textlength - 1) {
            index = 0
        }
        else {
            index++
        }
        setTimeout(startTextAnimation, 4000);
    }
    startTextAnimation();
}
window.onload = animationText;
export default Header;