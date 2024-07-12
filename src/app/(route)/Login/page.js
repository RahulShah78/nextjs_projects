'use client'
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import Link from "next/link";

import { useRouter } from 'next/navigation';
import { loginSuccess } from '../../store/AuthSlice';
import Header from "../../components/header/Header";
import Navbar1 from "../../components/navbar/Navbar1";
import Footer from "../../components/footer/Footer";
import store from "@/app/store/Store";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        console.log("login ------",{email,password})
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
             console.log("login response----",response)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                dispatch(loginSuccess(data));
                router.push('/');       // redirect to the home page
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Provider store={store}>
            <Header/>
            <Navbar1 />
            <div className="flex justify-center items-center m-8">
                <div className="flex flex-col p-8 border-[.3rem] border-r-[#7f8c8d] shadow-xl rounded gap-4 w-[30rem]">
                    <label className="text-xl font-bold">Email_ID</label>
                    <input
                        className="outline-none p-2 text-lg font-medium border border-red-500 rounded-md"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="text-xl font-bold">Password</label>
                    <input
                        className="outline-none p-2 text-lg font-medium border border-red-500 rounded-md"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="flex w-[6rem] justify-center text-xl font-bold rounded bg-red-700 h-8"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <Link href={'/Registration'}>Don't have an account? Register</Link>
                </div>
            </div>
            <Footer />
        </Provider>
    );
};

export default Login;