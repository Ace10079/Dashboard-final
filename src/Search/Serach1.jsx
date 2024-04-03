import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Table3 from './Table3'
import Table2 from '../Admin/Table2'

function Serach1() {
  return (
    <div className='flex'>
                <div className='w-[253px]'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Header />
                    <Table3/>
                </div>
            </div>
  )
}

export default Serach1
