import React from 'react';
import { IconUserCircle,IconChevronLeft,IconMenuDeep } from '@tabler/icons-react';

function Header() {
  return (
    <div className='w-full ml-3 flex justify-between text-white'>
      <div className='mt-2 text-black'>
      <IconMenuDeep stroke={2} />
      </div>
      <div className='m-2'>
      <button className='mr-3 bg-green-500 p-2 rounded-lg font-bold flex gap-1'>
        <div>
        <IconUserCircle stroke={2} />
        </div>
        <div>
          <p>Karan</p>
        </div>
        <div>
    
        </div>
      </button>
      </div>
      
     
    </div>
  );
}

export default Header;
