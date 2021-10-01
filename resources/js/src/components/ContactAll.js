import React from 'react'
import ContactForm from './ContactForm'

export const ContactAll = () => {
    // function initMap() {
    //     map = new google.maps.Map()
    // }
    return (
        <div className="">
            <div className="lg:container mx-auto md:py-20 py-10 px-4 text-center">
                <h1 className="md:text-5xl text-3xl font-semibold">How Can We Help?</h1>
                <p className="md:text-xl text-lg font-semibold py-5">Send us a message!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
                    <div className=" md:col-span-2">
                        <ContactForm/>
                    </div>
                    <div className=" md:col-span-1 bg-green-900 p-5 bg-opacity-40">
                        <div className="h-full text-gray-200">
                            <div className="mb-5 h-80">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30699.61762272226!2d120.66167290598617!3d15.885363122432153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913b6d34c271cf%3A0x6f6b79b17a71d7c2!2sPugaro%2C%20Balungao%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1632450660890!5m2!1sen!2sph" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="p-2">
                                <h1 className="text-left font-semibold text-lg pl-5">Main:</h1>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="pl-2 font-medium">Location: Pugaro, Balungao, Pangasinan</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800 " viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="pl-2 font-medium">Contact #: 0977-347-1998 / 0915-248-1247</span>
                                </div>
                            </div>
                            <div className=" p-2 md:mt-5 mt-2">
                                <h1 className="text-left font-semibold text-lg pl-5">Branch:</h1>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="pl-2 font-medium">Location: Santiago, Isabela</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800 " viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="pl-2 font-medium">Contact #: 0918-572-1151</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
