'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Provider } from "react-redux";
import store from "../store/Store";


const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phoneNo,
                    password
                })
            });

            if (response.ok) {
                router.push('/'); // Redirect to the home page
            } else {
                const errorData = await response.json();
                console.error(`Registration failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
        }
    };

    return (
        <Provider store={store}>
            <div className="flex justify-center m-8">
                <div className="border-[.3rem] border-r-[#7f8c8d] shadow-xl rounded">
                    <div className="flex justify-between items-center p-8 rounded gap-20">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Name</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="text" 
                                    placeholder="Enter your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Email</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="email" 
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Phone No.</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="text" 
                                    placeholder="Enter your Phone No."
                                    value={phoneNo}
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Password</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="password" 
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>
                    <Link href="/Login">  <button 
                        onClick={handleClick} 
                        className="ml-8 bg-red-500 rounded-sm text-2xl font-medium w-28 mb-2 h-10" 
                        type="submit"
                    >
                        Register
                    </button></Link>
                </div>
            </div>
        </Provider>
    );
}

export default Register;
