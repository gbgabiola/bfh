import React from 'react'
import { ProductSelected } from '../../components/ProductSelected'
import { Footer } from '../../components/Sections/Footer'
import { NavBar } from '../../components/Sections/NavBar'

export const ProductSpecific = () => {
    return (
        <div>
            <NavBar/>
            <ProductSelected/>
            <Footer/>
        </div>
    )
}
