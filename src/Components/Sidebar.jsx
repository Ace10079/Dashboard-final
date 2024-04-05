import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconDashboard,IconUser,IconMenuDeep,IconSearch,IconUsers } from '@tabler/icons-react';

function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <div className={`${open ? "w-[253px]" : "w-[50px]"} xl:duration-300 green  h-screen sidebar-text`}>
            <div className='lg:flex lg:justify-between lg:relative'>
                <h1 className={`ml-16 pt-3 ${open ? 'text-[40px]' : 'text-[0px]'}`}>Logo</h1>
                <IconMenuDeep stroke={2} className={`absolute ${open ? "left-64 top-2" : "top-2 text-white left-2"}`} onClick={() => setOpen(!open)} />
            </div>

            <div className='absolute'>
                <ul className='pt-9 pl-2 flex flex-col gap-9 text-white justify-items-center'>
                    <div className='flex justify-between'>
                        <li className={`${open ? 'text-[20px]' : 'hidden'}  font-[Century Gothic] font-medium opacity-[]`}><Link to="/customer">Dashboard</Link></li>
                         <IconDashboard stroke={1} className={` ${open ? 'hidden':'w-[30px] h-[30px] mr-3'}`} />
                    </div>
                    <div className='flex justify-between'>
                        <li className={`${open ? 'text-[20px]' : 'hidden'}  font-[Century Gothic] font-medium opacity-[]`}><Link to="/customer">Customer</Link></li>
                        <Link to="/customer"><IconUser stroke={1} className={` ${open ? 'hidden':'w-[30px] h-[30px] mr-3'}`} /></Link>
                        
                    </div>
                    <div className='flex justify-between'>
                        <li className={`${open ? 'text-[20px]' : 'hidden'}  font-[Century Gothic] font-medium opacity-[]`}><Link to="/search">Search</Link></li>
                        <Link to="/search"> <IconSearch stroke={1} className={` ${open ? 'hidden':'w-[30px] h-[30px] mr-3'}`} /></Link>
                       
                    </div>
                    
                    <div className='flex justify-between'>
                        <li className={`${open ? 'text-[20px]' : 'hidden'}  font-[Century Gothic] font-medium opacity-[]`}><Link to="/solution">Solution</Link></li>
                        <Link to="/solution"><IconDashboard stroke={1} className={` ${open ? 'hidden':'w-[30px] h-[30px] mr-3'}`} /></Link>
                        
                    </div >
                    
                    <div className='flex justify-between'>
                        <li className={`${open ? 'text-[20px]' : 'hidden'}  font-[Century Gothic] font-medium opacity-[]`}><Link to="/admin">Admin</Link></li>
                        <Link to="/admin"><IconUsers stroke={1} className={` ${open ? 'hidden':'w-[30px] h-[30px] mr-3'}`} /></Link>
                        

                    </div>
                   

                </ul>
            </div>
        </div>
    )
}

export default Sidebar
