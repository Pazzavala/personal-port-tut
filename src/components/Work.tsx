import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

export const Work = () => {
    return (
        <div className='max-w-[1300px] mx-auto p-5' id='work'>
            <div className='mb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
                <p className='text-gray-400'>
                    Check out some of my recent work
                </p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                                shadow-lg shadow-[#040c16] group rounded-md flex justify-center
                                 items-center h-[200px] bg-cover relative'
                >
                    <img src={proj1} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 1
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'
                >
                    <img src={proj2} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 2
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'
                >
                    <img src={proj3} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 3
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'
                >
                    <img src={proj4} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 4
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'
                >
                    <img src={proj5} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 5
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'
                >
                    <img src={proj6} alt='Project 1' />
                    <div
                        className='opacity-0 group-hover:opacity-90 backdrop-blur-md absolute 
                                     flex flex-col justify-center items-center p-3'
                    >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            {' '}
                            Project 6
                        </span>
                        <div pt-8 text-center>
                            <a href='/'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2 bg-white
                                                text-gray-700 font-bold text-lg'
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
