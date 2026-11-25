import React from 'react'
import Footer from '../Components/website/Footer/Footer'
import Navbar from '../Components/website/Navbar/Navbar.jsx'

export default function websiteLayout({ children }) {
    return (
        <>
        <Navbar/>
            <main>{children}</main>
            <Footer />
        </>
    )
}
