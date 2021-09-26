import React from 'react'
import { NavBar } from '../../components/Sections/NavBar'
import { Footer } from '../../components//Sections/Footer'
import { HomeHero } from '../../components/HomeHero'



export const Home = () => {
    return (
        <div>
            <NavBar/>
            <HomeHero/>
            <Footer/>
        </div>
    )
}
