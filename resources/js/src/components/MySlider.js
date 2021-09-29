import React, {useState} from 'react'

const items = [{image:"/images/hero_feature.jpg"}, {image:"https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"}, {image:"https://images.unsplash.com/photo-1543039625-14cbd3802e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"}]
export const MySlider = () => {
    const [current, setCurrent] = useState(0);
    const length = items.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        
    };
    console.log(current)
    if (!Array.isArray(items) || items.length <= 0) {
        return null;
    }
    return (
        <div className=" relative h-full flex justify-center align-middle">
                <div className=" bg-green-800 bg-opacity-20 p-2 rounded-xl absolute top-1/2 left-8 text-green-800 z-10 cursor-pointer select-none -m-6" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </div>
                <div className="bg-green-800 bg-opacity-20 p-2 rounded-xl absolute top-1/2 right-8 text-green-800 z-10 cursor-pointer select-none -m-6" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="rounded-lg">
                    {items.map((item, index) => {
                        return (
                            <div className={index === current ? 'opacity-100 duration-1000 scale-110' : ' opacity-0 duration-1000 ease-out'} key={index}>
                                {index === current && (<img src={item.image} alt="item image" className=" object-fit md:h-96 h-50 w-full shadow-2xl rounded-xl"/>)}
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
