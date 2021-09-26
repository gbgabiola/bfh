import React from 'react'

export const HomeHero = () => {
    return (
        <div>
            <div className="flex lg:container mx-auto md:my-20 my-10 items-center px-4 md:flex-row flex-col text-center md:text-left">
                <div className="md:w-6/12 w-full">
                    <h1 className="pb-8 md:text-5xl text-3xl font-semibold">Your Best Value
                    Proposition</h1>
                    <p className="md:text-xl text-md md:w-8/12 w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img className="md:w-6/12 w-full pt-10 md:pt-0" src="/images/hero_feature.jpg"/>
            </div>
        </div>
    )
}
