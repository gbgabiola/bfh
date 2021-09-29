import React,{useState, useEffect,} from 'react';
import axios from 'axios';
import { FeatureIcon } from './FeatureIcon';


export const FeaturesMain = () => {
    const [features,setFeatures] = useState([]);
    useEffect(() => {
        axios.get('/api/feature').then(res => {
            console.log(res.data)
            setFeatures(res.data[0])
        }).catch(err => {
            console.log(err)
        });
    },[]);
    if (!features) {
        return null;
    }
    return (
        <div>
                <div className="flex flex-col md:flex-row items-center lg:container mx-auto md:my-20 my-10 px-4">
                <div className="flex flex-col md:w-6/12 w-full">
                    <div className="flex flex-col">
                        <h1 className="md:text-5xl text-3xl font-semibold px-5 pb-5">{features.title}</h1>
                        <p className="md:text-xl text-md md:w-8/12 w-full px-5">{features.description}</p>
                    </div>
                    <ul className="md:py-7 py-3">
                        <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                        <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                        <li className="flex items-center"><FeatureIcon/><span className="p-1">Benefit of Feature</span></li>
                    </ul>
                </div>
                <img className="md:w-6/12 w-full md:pt-0 pt-5" src="/images/hero_feature.jpg"/>
            </div>
        </div>
    )
}

