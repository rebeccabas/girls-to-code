import React from 'react'
import Maincontent from './Maincontent'

function Sidenav({ title }) {
    return (
        <div className='flex h-full'>
            <aside className="bg-purple-500 border-white border-2 p-40 justify-center items-center">
                <nav>
                <h1 className="text-2xl font-bold">{title}</h1>
                </nav>
            </aside>
            <Maincontent/>
        </div>
    )
}

export default Sidenav
