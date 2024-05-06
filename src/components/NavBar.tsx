import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const NavBar = () => {
    const [nav, setNav] = useState(false);
    const pages = ['About', 'Work', 'Contact'];

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='bg-black text-gray-400 h-[100px] max-w-[1300px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold ml-4 primary-color'>M. Zavala</h1>
            <ul className='hidden md:flex'>
                {pages.map((page) => (
                    <li className='p-5'>
                        <a href={`# ${page}`}>{page}</a>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <div
                className={
                    nav
                        ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                        : 'fixed left-[-100%]'
                }
            >
                <h1 className='text-3xl primary-color ml-4'>Maria Zavala</h1>
                <ul className='p-8 text-2xl'>
                    {pages.map((page) => (
                        <li className='p2'>
                            <a href={`#${page}`}>{page}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
