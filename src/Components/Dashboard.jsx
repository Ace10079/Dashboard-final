import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Cards from './cards'
import Table1 from './Table1'

function Dashboard() {
    return (
        <>
             <div className='flex'>
                <div className=''>
                    <Sidebar/>
                </div>
                <div className='w-full'>
                    <Header />
                    <Cards/>
                    <Table1/>
                </div>
            </div>
        </>

    )
}

export default Dashboard
