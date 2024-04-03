import React from 'react'
import Signin from './SignIn'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

function Profile() {
    return (
        <div>
            <div className='flex'>
                <div className='w-72'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Header />
                    <Signin />
                </div>
            </div>
        </div>
    )
}

export default Profile
