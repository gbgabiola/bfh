import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom';

const products = [
    {name: "Promo", to:"/products/promo"},
    {name: "Casket", to:"/products/casket"},
    {name: "Flowers", to:"/products/flower"},
    {name: "Lights", to:"/products/light"},
]
export const ProductsMenu = ({isOpen}) => {

    const pathname = window.location.pathname;
    console.log(pathname);
    
    return (
        <div className={
            
            isOpen
              ? 'absolute mt-4 bg-gray-200 py-3 items-start inset-x-0'
              : 'hidden'
          }>
              <div className="flex lg:container lg:mx-auto">
              {
                products.map(product => (
                    
                    <div className="">
                        <NavLink to={product.to} className="p-3 hover:bg-green-500 hover:text-white"
                        activeClassName=" bg-green-700 text-white">{product.name}</NavLink>
                    </div>
                    ))
            }
              </div>
            
        </div>
    )
}
