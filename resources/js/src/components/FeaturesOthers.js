import React, {useEffect, useState} from 'react'
import { FeatureIcon } from './FeatureIcon'
import axios from 'axios'

export const FeaturesOthers = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        axios.get('api/feature').then(res => {
            res.data.splice(0,1);
            setFeatures(res.data)
        }).catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div className="bg-gray-100 pt-20 px-3 text-gray-600 py-20">
            <div className="lg:container lg:mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="md:text-4xl text-3xl font-semibold pb-4">Best Still Active Feature</h1>
                    <p className="md:text-xl text-md w-6/12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 md:gap-20 gap-5 pt-10">
                {features.map(feature => {
                    return(
                        <div className="rounded-2xl bg-green-900 bg-opacity-20 p-10">
                            <div className="rounded-md">
                                <img className="rounded-md" src="/images/hero_feature.jpg"/>
                            </div>
                            <h1 className="md:text-2xl text-xl pt-4 font-bold">{feature.title}</h1>
                            <p className="px-4 md:py-5 py-3 md:text-lg text-md font-semibold">{feature.description}</p>
                            <ul className="">
                                <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                                <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                                <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                            </ul>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
