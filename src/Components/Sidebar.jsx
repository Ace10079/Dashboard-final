import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div>
            <div className='green  h-screen sidebar-text'>
                <h1 className='ml-16 pt-3 text-[40px] mt-[]'>Logo</h1>
                <div>
                    <ul className='pt-9 pl-7 flex flex-col gap-9 text-white'>
                        <li className='text-[28px] font-[rubik] font-medium opacity-[]'><Link to="/customer">Dashboard</Link></li>
                        <li className='text-[28px] font-[rubik] font-medium opacity-[40%]'><Link to="/customer">Customer</Link></li>
                        <li className='text-[28px] font-[rubik] font-medium opacity-[40%]'><Link to="/search">Search</Link></li>
                        <li className='text-[28px] font-[rubik] font-medium opacity-[40%]'><Link to="/solution">Solution</Link></li>
                        <li className='text-[28px] font-[rubik] font-medium opacity-[40%]'><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
