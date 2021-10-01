import React from 'react'
import { ContactAll } from '../../components/ContactAll'
import { Footer } from '../../components/Sections/Footer'
import { NavBar } from '../../components/Sections/NavBar'

export const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <ContactAll/>
            <Footer/>
        </div>
    )
}
