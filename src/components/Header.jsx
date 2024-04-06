import React from 'react'

const Header = () => {
    return (

        <div className="w-[50%] mx-auto bg-[#f44336] ">
            <h1 className='text-4xl text-center text-white pt-5'>Ehsas Lab</h1>
            <div className='flex justify-center py-5'>
                <input type="text" className='border-2  w-[60%] text-center' />
                <span className='bg-gray-300 px-4 py-2 '>Add</span>
            </div>
        </div>
    )
}

export default Header