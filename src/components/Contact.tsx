export const Contact = () => {
    return (
        <div className='max-w-[1300px] mx-auto bg-black sm:py-20 p-5' id='work'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>
                    Contact Me
                </h2>
            </div>
            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>
                        <form
                            action='https://getform.io/f/qalowgeb'
                            method='POST'
                        >
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                <div>
                                    <div className='mt-2.5 relative'>
                                        <input
                                            type='text'
                                            name='firstName'
                                            id='firstName'
                                            placeholder='Your Name'
                                            className='bg-[#161616] w-full p-4 text-gray-400 placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-2.5 relative'>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Your Email'
                                            className='bg-[#161616] w-full p-4 text-gray-400 placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <div className='mt-2.5 relative'>
                                        <textarea
                                            name='message'
                                            id='message'
                                            placeholder='Your Message'
                                            rows={4}
                                            className='bg-[#161616] w-full p-4 text-gray-400 placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <button
                                        type='submit'
                                        className='transform transition-transform duration-300 hover:scale-105 text-xl p-4 w-full mt-2 font-semibold text-white bg-primary-color rounded-md'
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
