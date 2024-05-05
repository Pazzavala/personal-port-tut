import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

export const Skills = () => {
    return (
        <div
            className='border border-gray-400 bg-black text-gray-400 md:h-37 max-w-[1300px] mx-auto 
        grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'
        >
            <h2 className='text-gray-500 text-xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack{' '}
            </h2>
            <div className='flex flex-col items-center m-4 sm:my-0 w-12 md:w-24'>
                <img src={html} alt='HTML Icon' />
                <p className='mt-2'>HTMl</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-12 md:w-24'>
                <img src={css} alt='CSS Icon' />
                <p className='mt-2'>CSS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-12 md:w-24'>
                <img src={javascript} alt='javascript Icon' />
                <p className='mt-2'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-12 md:w-24'>
                <img src={react} alt='REACT Icon' />
                <p className='mt-2'>React</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-12 md:w-24'>
                <img src={tailwind} alt='tailwind Icon' />
                <p className='mt-2'>Tailwind</p>
            </div>
        </div>
    );
};
