import React from 'react'

function Footer({ title }) {
    return (
        <footer className="bg-green-600 border-white border-2 text-white p-4 text-center">
            <h1 className="text-xl font-bold">{title}</h1>
        </footer>
    )
}

export default Footer
