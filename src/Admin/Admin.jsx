import React from 'react'
import Header from '../Components/Header'
import Table1 from '../Components/Table1'
import Sidebar from '../Components/Sidebar'
import Table2 from './Table2'

function Admin() {
    return (
        <div className='flex'>
                <div className='w-[253px]'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Header />
                    <Table2/>
                </div>
            </div>
    )
}

export default Admin
