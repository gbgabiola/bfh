import React from 'react'
import { FeaturesMain } from '../../components/FeaturesMain'
import { FeaturesOthers } from '../../components/FeaturesOthers'
import { Footer } from '../../components/Sections/Footer'
import { NavBar } from '../../components/Sections/NavBar'

export const Features = () => {
    return (
        <div>
            <NavBar/>
            <FeaturesMain/>
            <FeaturesOthers/>
            <Footer/>
        </div>
    )
}
