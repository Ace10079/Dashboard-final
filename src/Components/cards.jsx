import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IconUserPlus,IconUsers,IconSearch } from '@tabler/icons-react';

function Cards() {
  return (
    <div className='flex justify-center m-2 gap-10 font-bold text-sm'>
      <div className='border-solid border-2 rounded-lg flex gap-5  bg-slate-100 hover:shadow-2xl'>
        <div className='p-3'>
          <p>Total No. of Users</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconUserPlus stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full'/>
        </div>

      </div>
      <div className='border-solid border-2  rounded-lg flex gap-5  bg-slate-100 hover:shadow-2xl'>
        <div className='p-3'>
          <p>Total No. of Customers</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconUsers stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full' />
        </div>

      </div>
      <div className='border-solid border-2  rounded-lg flex gap-5  bg-slate-100 hover:shadow-2xl'>
        <div className='p-3'>
          <p>Total No. of Searches</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconSearch stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full' />
        </div>

      </div>
    </div>
  )
}

export default Cards
