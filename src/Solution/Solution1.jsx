import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Table4 from './Table4'

function Solution1() {
  return (
    <div className='flex'>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Header />
                    <Table4/>
                </div>
            </div>
  )
}

export default Solution1
