import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="bg-gray-200">
            <div className="lg:container lg:mx-auto py-10">
                <div className=" md:grid md:grid-cols-5 md:gap-4">
                    <img className="md:max-h-36 max-h-16 md:mx-0 mx-auto" src="/images/BFH_Logo.png"/>
                    <div className="flex flex-col md:flex-row justify-between col-start-2 col-span-3">
                        <div className="w-full lg:ml-20 text-center md:text-left md:py-0 py-2 md:text-lg text-sm">
                            <p className="font-bold text-green-700">Products</p>
                            <div className="flex flex-col">
                                <Link className="hover:text-green-800 font" to="/products/promo">Promo</Link>
                                <Link className="hover:text-green-800 font" to="/products/casket">Casket</Link>
                                <Link className="hover:text-green-800 font" to="/products/flower">Flowers</Link>
                                <Link className="hover:text-green-800 font" to="/products/light">Lights</Link>
                            </div>
                        </div>
                        <div className="w-full lg:ml-20 text-center md:text-left md:py-0 py-2 md:text-lg text-sm">
                            <p className="font-bold text-green-700">Address</p>
                            <span>Pugaro, Balungao, Pangasinan</span>
                        </div>
                        <div className="w-full lg:ml-20 text-center md:text-left md:py-0 py-2 md:text-lg text-sm">
                            <p className="font-bold text-green-700">Contacts</p>
                            <ul>
                                <li>Email: bfh@yahoo.com</li>
                                <li>Phone: 0977-347-1998 / 0915-248-1247</li>
                                <li>Landline: 12352345</li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="flex md:justify-between mt-3 md:mt-8 md:flex-row flex-col items-center md:text-lg text-sm">
                    <div className=" py-2"><span>&#169;</span> Copyright 2021 BFH. All rights reserved.</div>
                    <div>
                        <ul className="flex py-2">
                            <li className="mx-4"><a href="#"><i className="fab fa-facebook-f fa-lg text-green-700 transform hover:scale-125"></i></a></li>
                            <li className="mx-4"><a href="#"><i className="fab fa-twitter fa-lg text-green-700 transform hover:scale-125"></i></a></li>
                            <li className="mx-4"><a href="#"><i className="fab fa-linkedin-in fa-lg text-green-700 transform hover:scale-125"></i></a></li>
                            <li className="mx-4"><a href="#"><i className="fab fa-instagram fa-lg text-green-700 transform hover:scale-125"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
