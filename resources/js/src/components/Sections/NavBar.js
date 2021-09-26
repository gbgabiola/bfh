import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductsMenu } from './ProductsMenu'


export const NavBar = () => {
    // state for dropdown ProductsMenu
    const [isOpen, setIsOpen] = useState(false);
    // state for dropdown internal product menu
    const [isDrop, setIsDrop] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const drop = () => {
        setIsDrop(!isDrop);
        setIsOpen(false);
    }
    const close = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 768 && isDrop) {
                setIsDrop(false);
            }
        };
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });
    
    return (
        <div className="pt-16">
                <nav className="bg-gray-200 fixed inset-x-0 top-0 z-50">
                    <div className="lg:mx-auto lg:container flex p-3 text-lg font-semibold justify-between md:justify-start">
                        <span className="pr-8">
                            <img className="max-h-10" src="/images/BFH_Logo.png"/>
                        </span>
                        <ul className="md:flex items-center hidden">
                            <div className="mx-2">
                                <NavLink exact={true} to="/" className="p-3 hover:bg-green-500 hover:text-white rounded-md"
                                activeClassName=" bg-green-700 rounded-md text-white" onClick={close}
                                >Home</NavLink>
                            </div>
                            <div className="mx-2">
                                <NavLink to="/features" className="p-3 hover:bg-green-500 hover:text-white rounded-md"
                                activeClassName=" bg-green-700 rounded-md text-white" onClick={close}
                                >Features</NavLink>
                            </div>
                            <div className="mx-2">
                                <a className="p-3 hover:bg-green-500 hover:text-white rounded-md cursor-pointer active:bg-green-700" onClick={toggle}
                                >Products</a>
                                <ProductsMenu isOpen={isOpen}/>
                            </div>
                            <div className="mx-2">
                                <NavLink to="/contact" className="p-3 hover:bg-green-500 hover:text-white rounded-md"
                                activeClassName=" bg-green-700 rounded-md text-white" onClick={close}
                                >Contact Us</NavLink>
                            </div>
                        </ul>
                        <div className="flex md:hidden items-center" onClick={drop}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </nav> 
                <div>
                    <div className={isDrop ? "md:block":"hidden"}>
                        <Link className="block bg-gray-200 py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/">Home</Link>
                        <Link className="block bg-gray-200 py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/features">Features</Link>
                        <a className="block bg-gray-200 py-2 px-4 text-sm hover:bg-green-500 hover:text-white" onClick={toggle}>Products</a>
                        <div className={isOpen? "bg-gray-200" : "hidden"}>
                            <Link className="py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/products/promo">Promo</Link>
                            <Link className="py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/products/casket">Casket</Link>
                            <Link className="py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/products/flower">Flowers</Link>
                            <Link className="py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/products/light">Lights</Link>
                        </div>
                        <Link className="block bg-gray-200 py-2 px-4 text-sm hover:bg-green-500 hover:text-white" to="/contact">Contact Us</Link>
                    </div> 
                </div>       
        </div>
    )
}
