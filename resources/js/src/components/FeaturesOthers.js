import React from 'react'

export const FeaturesOthers = () => {
    return (
        <div className="bg-gray-100 pt-20 px-3">
            <div className="lg:container lg:mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="md:text-4xl text-3xl font-semibold pb-4">Best Still Active Feature</h1>
                    <p className="md:text-xl text-md w-6/12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className="my-20 flex md:flex-row flex-col md:space-x-2 space-x-0">
                    <div className="bg-gray-200">
                        <div className="bg-green-600 p-1 rounded-md">
                            <img className="rounded-md" src="/images/hero_feature.jpg"/>
                        </div>
                        <p className="px-4 py-5 md:text-lg text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="px-4 pb-6">Learn More</div>
                    </div>
                    <div className="bg-gray-200">
                        <div className="bg-green-600 p-1 rounded-md">
                            <img className="rounded-md" src="/images/hero_feature.jpg"/>
                        </div>
                        <p className="px-4 py-5 md:text-lg text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="px-4 pb-6">Learn More</div>
                    </div>
                    <div className="bg-gray-200">
                        <div className="bg-green-600 p-1 rounded-md">
                            <img className="rounded-md" src="/images/hero_feature.jpg"/>
                        </div>
                        <p className="px-4 py-5 md:text-lg text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="px-4 pb-6">Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
