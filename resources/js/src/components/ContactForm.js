import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function ContactForm() {
    const [show, setShow] = useState(false);
    const [clientMessage, setClientMessage] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
        error_list:[]
    });
    const {firstname, lastname, email, mobile, address, message} = clientMessage;
    const inputChange = e => {
        setClientMessage({...clientMessage, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        axios.post('/api/message', clientMessage).then(res => {
        if(res.data.status === 200){
            swal("Success",res.data.success,"success");
            console.log(clientMessage);
             // To Clear all fields
            setClientMessage({
                firstname: "",
                lastname: "",
                email: "",
                mobile: "",
                address: "",
                message: ""});
            setShow(false);
        }
        else if(res.data.status === 400) {
            setClientMessage({...clientMessage, error_list:res.data.errors});
            console.log(clientMessage);
            setShow(true);
        }
        });
    }
    // Variable for displaying validation rrors
    let display_errors = [];
    if(clientMessage.error_list){
        display_errors = [
            clientMessage.error_list.firstname,
            clientMessage.error_list.lastname,
            clientMessage.error_list.email,
            clientMessage.error_list.mobile,
            clientMessage.error_list.address,
            clientMessage.error_list.message,
        ]
    }
    return (
        <div>
            <div className="bg-green-900 p-5 bg-opacity-40">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="table">
                                <div className="bg-gray-200 p-1 rounded-l-md table-cell w-5 align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <input className=" focus:ring-2 focus:ring-green-500 border-gray-300 pl-4 h-9 w-full" type="text" name="firstname" placeholder="First Name" value={firstname} onChange={e => inputChange(e)}/>
                                </div>                               
                            </div>
                            <div className="table ">
                                <div className="bg-gray-200 p-1 rounded-l-md table-cell w-5 align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <input className=" focus:ring-2 focus:ring-green-500 border-gray-300 pl-4 h-9 w-full" type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={e => inputChange(e)}/>
                                </div>
                            </div>
                            <div className="table ">
                                <div className="bg-gray-200 p-1 rounded-l-md table-cell w-5 align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <input className=" focus:ring-2 focus:ring-green-500 border-gray-300 pl-4 h-9 w-full" type="email" name="email" required placeholder="Email" value={email} onChange={e => inputChange(e)}/>
                                </div>
                            </div>
                            <div className="table ">
                                <div className="bg-gray-200 p-1 rounded-l-md table-cell w-5 align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <input className=" focus:ring-2 focus:ring-green-500 border-gray-300 pl-4 h-9 w-full" type="text" name="mobile" placeholder="Mobile Number" value={mobile} onChange={e => inputChange(e)}/>
                                </div>
                            </div>
                            <div className="table md:col-span-2 col-span-1">
                                <div className="bg-gray-200 p-1 rounded-l-md table-cell w-5 align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <input className="p-4 h-9 w-full" type="text" name="address" placeholder="House No., Street, Brangay, City/Town, Province, Zip Code" value={address} onChange={e => inputChange(e)}/>
                                </div>
                            </div>
                            <div className="table md:col-span-2 col-span-1">
                                <div className="bg-gray-200 p-1 rounded-l-md w-5 align-middle table-cell">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <textarea className="focus:ring-2 focus:ring-green-500 border-gray-300 pl-4 pt-2 h-20 w-full" name="message" placeholder="Your Message" value={message} onChange={e => inputChange(e)}></textarea>
                                </div>
                            </div>
                        </div>
                        <button className="bg-green-700 text-white mt-5 py-2 px-4 font-regular text-xl rounded-md shadow-2xl hover:opacity-70" type="submit" onClick={handleSubmit}><span className="">Send</span></button>  
            </div>

                    <div className={!show ? "hidden" : "my-5 bg-gray-400 bg-opacity-30 mx-auto inline-block rounded-lg p-5"}>
                        {display_errors.map((err) => {
                            return (<p className="text-red-500 font-medium">{err}</p>)
                        })}
                    </div>

        </div>
    )
}

export default ContactForm