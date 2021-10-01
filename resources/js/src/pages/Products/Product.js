import React from 'react'
import { ProductType } from '../../components/ProductType'
import { Footer } from '../../components/Sections/Footer'
import { NavBar } from '../../components/Sections/NavBar'


export const Product = () => {
    
    return (
        <div>
            <NavBar/>
            <ProductType/>
            <Footer/>
        </div>
    )
}
