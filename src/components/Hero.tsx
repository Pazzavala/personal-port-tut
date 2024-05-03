import heroImg from '../assets/Character1.png';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1300px] md:h-[70hv] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={heroImg} alt='hero-image' />
            </div>
            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>I'm a</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Frontend Dev',
                            1000,
                            'Web Designer',
                            1000,
                            'CompSci Major',
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    Embarking on a journey armed with code and creativity. 🚀
                    Recent Computer Science grad ready to make an impact, one
                    line at a time. 💻✨{' '}
                </p>
                <p className='text-yellow-100 tracking-wide sm:text-lg my-6 lg:text-xl'>
                    #NewGrad #CodeWithPassion
                </p>
                <div>
                    <a
                        href='/'
                        className='px-6 py-3 w-full rounded-xl mr-4 primary-color-button text-white'
                    >
                        {' '}
                        Download CV
                    </a>
                    <a
                        href='#contact'
                        className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-r from-pink-500 to-yellow-300 text-white hover:border-none'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};
