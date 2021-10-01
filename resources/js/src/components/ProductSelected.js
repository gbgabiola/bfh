import React, { useEffect, useState } from 'react'
import { MySlider } from './MySlider'
import axios from 'axios'
import { useParams } from 'react-router'

export const ProductSelected = () => {
    const [items, setItems] = useState([]);
    const { id, category } = useParams();
    useEffect(() => {
        axios.get("/api/product").then(res => {
            console.log(id);
            setItems(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    const filteredItems = items.filter(item => item.category_id == category);
    return (
        <div className="bg-gray-100">
            {filteredItems.map((item) => {
                if(item.id == id){ 
                    return (
                        <div className="lg:container mx-auto md:py-20 py-10 px-4 ">
                            <div className="bg-green-900 bg-opacity-40 md:p-20 p-5 flex md:flex-row flex-col md:space-x-20 space-x-0 items-center">
                                <div className="md:w-1/2 w-full">
                                    <MySlider/>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <h1 className="md:text-3xl text-xl font-semibold md:pb-4 pb-1 text-white md:mt-0 mt-5 md:pl-0 pl-10">{item.product_name}</h1>
                                    <div className="px-10 py-2 text-gray-200">
                                        <p className="md:text-xl text-lg pb-5">{item.product_description}</p>
                                        <ul>
                                            <li className="py-2"><span className="md:text-lg font-semibold uppercase">Price:</span><span className="pl-2 font-semibold md:text-lg capitalize">&#8369; {item.product_price}.00</span></li>
                                            <li className="py-2"><span className="md:text-lg font-semibold uppercase">Type:</span><span className="pl-2 font-semibold md:text-lg capitalize">{item.product_type}</span></li>
                                            <li className="py-2"><span className="md:text-lg font-semibold uppercase">Size:</span><span className="pl-2 font-semibold md:text-lg capitalize">{item.product_size}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return false;
                }
            })}
            
        </div>
    )
}
