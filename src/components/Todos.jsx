import React from 'react'

const Todos = () => {
    return (
        <div className="w-[50%] mx-auto bg-[#eee] ">
            <ul >
                <li className='flex justify-between px-10'>
                    I go to home
                    <span className='bg-[#f44336]'>X</span>
                </li>
                <li className='flex justify-between px-10'>
                    I go to home
                    <span>X</span>
                </li>
                <li className='flex justify-between px-10'>
                    I go to home
                    <span>X</span>
                </li>
                <li className='flex justify-between px-10'>
                    I go to home
                    <span>X</span>
                </li>
                <li className='flex justify-between px-10'>
                    I go to home
                    <span>X</span>
                </li>

            </ul>
        </div>
    )
}

export default Todos