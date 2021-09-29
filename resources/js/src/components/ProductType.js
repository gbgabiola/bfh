import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios';

const heading = [
    {type:"promo", title:"Promo for this Month", description:"If you don’t try this app, you won’t become the superhero you were meant to be"},
    {type:"casket", title:"Best Selling product", description:"If you don’t try this app, you won’t become the superhero you were meant to be"},
    {type:"flower", title:"Best Selling Flower Bouquet", description:"If you don’t try this app, you won’t become the superhero you were meant to be"},
    {type:"light", title:"Best Selling Lights", description:"If you don’t try this app, you won’t become the superhero you were meant to be"}
];
export const ProductType = () => {
    
    const { category } = useParams();
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const seeMore = () => {
        setOpen(!open);
    }
    
    useEffect(() => {
        axios.get("/api/product").then(res => {
            console.log(res.data)
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, [category])
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    const filteredProducts = products.filter(product => product.category == category);
    return (
        <div className="bg-white">
            <div className="lg:container mx-auto md:py-20 py-10 px-4">
            {heading.map((item, index) => {
                if(item.type == category) {
                    return (
                        <div className="text-center" key={index}>
                            <h1 className="md:text-5xl text-3xl font-semibold pb-4">{item.title}</h1>
                            <p className="md:text-xl font-semibold text-md">“{item.description}”</p>
                        </div>
                    )
                }else {
                    return false;
                }
            })}      
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 pt-10">
                    {filteredProducts.map((product, index) => {
                        if(index <= 3 && product.category) {
                            return (
                                <Link className="transform hover:scale-105 duration-300" to={`/products/${category}/${product.id}`}>
                                <div className=" bg-white md:my-0 my-2 rounded-lg overflow-hidden shadow-2xl flex sm:flex-col flex-row">
                                    <div className="sm:w-full w-5/12" >
                                        <img className="object-fit md:h-60 sm:h-40 h-32  w-full" src={`/images/${product.image}`}/>
                                    </div>
                                    <div className="md:p-6 p-1 md:w-full w-6/12 mx-auto">
                                        <h4 className="text-xl text-green-800 font-semibold">{product.name}</h4>
                                        <div>
                                            <span className="capitalize">&bull; Type: {product.type}</span>
                                        </div>
                                        {/* <div className="md:pt-6 pt-1">
                                             Select
                                        </div> */}
                                    </div>
                                </div>
                                </Link>
                            )
                        }else{
                            return (
                                
                                    <Link className="transform hover:scale-105 duration-300" to={`/products/${category}/${product.id}`}>
                                        <div className={open ? "block" : "hidden"}>
                                    <div className=" bg-white md:my-0 my-2 rounded-lg overflow-hidden shadow-2xl flex sm:flex-col flex-row">
                                        <div className="sm:w-full w-5/12" >
                                            <img className="object-fit md:h-60 sm:h-40 h-32  w-full" src={`/images/${product.image}`}/>
                                        </div>
                                        <div className="md:p-6 p-1 md:w-full w-6/12 mx-auto">
                                            <h4 className="text-xl text-green-800 font-semibold">{product.name}</h4>
                                            <div>
                                                <span className="capitalize">&bull; Type: {product.type}</span>
                                            </div>
                                            {/* <div className="md:pt-6 pt-1">
                                                Select
                                            </div> */}
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                                
                            )
                        }
                        
                    })}
                </div>
                    <div className={products.length <= 3 || open ? "hidden" : "block"}>
                        <div onClick={seeMore} className="flex justify-center mx-auto md:mt-16 mt-5">
                            <button className="bg-red-700 text-white py-3 px-5 font-semibold text-xl rounded-full shadow-2xl hover:bg-red-500 flex items-center"><span className="">Load More</span></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
